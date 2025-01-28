import api from "../../../services/api";

const useDadosOcorrencia = (setOcorrenciaModal, setShowModal) => {

    const handleDadosComplementares = async (id, idcliente) => {
        try {
            const [responseOcorrencia, responseCliente] = await Promise.all([
                api.get(`ocorrencias/${id}`),
                api.get(`clientes/${idcliente}`)
            ]);

            const dadosOcorrencia = {
                ...responseOcorrencia.data,
                cliente: responseCliente.data
            };

            setOcorrenciaModal(dadosOcorrencia);
            setShowModal(true);

        } catch (error) {
            console.error('Erro ao obter dados complementares:', error);
        }
    };

    return handleDadosComplementares
}

export default useDadosOcorrencia