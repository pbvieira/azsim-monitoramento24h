import useNavigateToCadastroCliente from "../../../../hooks/UseNavigate";

const useEditCliente = ({ dadosBasicos, setDadosBasicos, api }) => {
    const navigateToCadastro = useNavigateToCadastroCliente();


    const handleEditCliente = async (id) => {
        try {
            if (id) {
                const response = await api.get(`clientes/${id}`);
                const clienteParaEdicao = response.data;
                setDadosBasicos({
                    ...dadosBasicos,
                    unidade: clienteParaEdicao.unidade,
                    codHabil: clienteParaEdicao.codHabil,
                    codCondor: clienteParaEdicao.codCondor,
                    natureza: clienteParaEdicao.natureza,
                    documento: clienteParaEdicao.documento,
                    incMunincipal: clienteParaEdicao.incMunincipal,
                    nome: clienteParaEdicao.nome,
                    nomeFantasia: clienteParaEdicao.nomeFantasia,
                    endereco: clienteParaEdicao.endereco,
                    bairro: clienteParaEdicao.bairro,
                    cidade: clienteParaEdicao.cidade,
                    uf: clienteParaEdicao.uf,
                    cep: clienteParaEdicao.cep,
                    observacao: clienteParaEdicao.observacao,
                    codificador: clienteParaEdicao.codificador,
                    contatos: clienteParaEdicao.contatos,
                    setores: clienteParaEdicao.setores,
                    viagens: clienteParaEdicao.viagens,
                });
            }
            navigateToCadastro(`/azsim/edicaoCliente/${id}`);
        } catch (error) {
            console.error('Erro ao obter detalhes do cliente. Verifique sua conexão e tente novamente.');
        }
    };
    return handleEditCliente;
};

export default useEditCliente;


