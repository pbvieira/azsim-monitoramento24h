import api from "../../../services/api";

const useDadosComplementares = (setOcorrenciaModal, setShowModal) => {

    const handleDadosComplementares = async (id, idcliente) => {
        try {
            const [response, responseCliente] = await Promise.all([
                api.get(`ocorrencia/${id}`),
                api.get(`clientes/${idcliente}`)
            ]);

            const dadosCombinados = {
                ...response.data,
                cliente: responseCliente.data
            };

            setOcorrenciaModal(dadosCombinados);
            setShowModal(true);

        } catch (error) {
            console.error('Erro ao obter dados complementares:', error);
        }
    };

    return handleDadosComplementares
}

export default useDadosComplementares