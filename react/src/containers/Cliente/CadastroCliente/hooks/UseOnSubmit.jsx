import { useState } from "react";
import useNavigateToCadastroCliente from "../../../../hooks/UseNavigate";
import useScrollToTop from "../../../../hooks/UseScrollToTop";
import useReloadPage from "../../../../hooks/UseReloadPage";
import { validarCamposObrigatorios } from "../../CadastroCliente/fragments/utils/validaCamposObrigatorios";
import { prepararDadosRequisicao } from "../../CadastroCliente/fragments/utils/preparaDadosRequisicao";
import api from "../../../../services/api";
import { exibirAlerta } from "../../CadastroCliente/fragments/utils/alertaReq";


const useSubmitCliente = (idCliente, dadosBasicos, carregarDadosCliente, setError, setIdCliente, setDadosBasicos) => {
    const [loading, setLoading] = useState(false);
    const navigateToCadastro = useNavigateToCadastroCliente();
    const scrollToTop = useScrollToTop();
    const reloadPage = useReloadPage();

    const onSubmit = async (data) => {
        const camposObrigatorios = ['unidade', 'natureza', 'documento', 'nome'];
        validarCamposObrigatorios(data, camposObrigatorios, setError);
        if (loading) return;

        try {
            const dadosRequisicao = prepararDadosRequisicao(dadosBasicos, idCliente);
            const resposta = await api.post(`cliente`, dadosRequisicao);

            if (resposta.status === 200) {
                const novoIdCliente = resposta.data.id;
                if (idCliente) {
                    console.log('Cliente atualizado com sucesso.');
                } else {
                    setIdCliente(novoIdCliente);
                }
                carregarDadosCliente(idCliente);

                const result = await exibirAlerta('Cliente cadastrado com sucesso!', 'Quer cadastrar outro cliente?', 'question');

                if (result.isConfirmed) {
                    setDadosBasicos(dadosBasicos);
                    navigateToCadastro('/cadastroCliente');
                    scrollToTop();
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


    return { onSubmit, loading };
};

export default useSubmitCliente;
