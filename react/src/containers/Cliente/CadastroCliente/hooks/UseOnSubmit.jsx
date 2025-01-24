import { useState } from "react";
import useScrollToTop from "../../../../hooks/UseScrollToTop";
import useReloadPage from "../../../../hooks/UseReloadPage";
import { validarCamposObrigatorios } from "../../CadastroCliente/fragments/utils/validaCamposObrigatorios";
import { prepararDadosRequisicao } from "../../CadastroCliente/fragments/utils/preparaDadosRequisicao";
import api from "../../../../services/api";
import { exibirAlerta } from "../../CadastroCliente/fragments/utils/alertaReq";
import useNavigateToCadastroCliente from "../../../../hooks/UseNavigate";

const useSubmitCliente = (idCliente, dadosBasicos, carregarDadosCliente, setError, setIdCliente) => {
    const [loading, setLoading] = useState(false);
    const scrollToTop = useScrollToTop();
    const navigateToCadastro = useNavigateToCadastroCliente();
    const reloadPage = useReloadPage();

    const submitHandler = async (data, showAlert = true) => {
        const camposObrigatorios = ['unidade', 'natureza', 'documento', 'nome'];
        validarCamposObrigatorios(data, camposObrigatorios, setError);
        if (loading) return;

        try {
            setLoading(true);
            const dadosRequisicao = prepararDadosRequisicao(dadosBasicos, idCliente);
            const resposta = await api.post(`clientes`, dadosRequisicao);

            if (resposta.status === 200) {
                const novoIdCliente = resposta.data.id;
                if (idCliente) {
                    console.log('Cliente atualizado com sucesso.');
                } else {
                    setIdCliente(novoIdCliente);
                }
                carregarDadosCliente(idCliente);

                if (showAlert) {
                    const result = await exibirAlerta('Cliente cadastrado com sucesso!', 'Quer cadastrar outro cliente?', 'question');
                    if (result.isConfirmed) {
                        navigateToCadastro('/azsim/cadastroCliente');
                        scrollToTop();
                        reloadPage();
                    }
                } else {
                    navigateToCadastro('/azsim/cadastroCliente');
                    reloadPage();
                }
            }
        } catch (error) {
            console.error('Erro ao submeter o formulário:', error);
            await exibirAlerta('Erro ao submeter o formulário', 'Ocorreu um erro ao tentar cadastrar o cliente. Por favor, tente novamente.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = (data) => submitHandler(data, true);
    const onSubmitAndReload = (data) => submitHandler(data, false);

    return { onSubmit, onSubmitAndReload, loading };
};

export default useSubmitCliente;