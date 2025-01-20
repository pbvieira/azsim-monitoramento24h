import api from "../../../services/api";
import useAtualizaOcorrencias from "./useAtualizaOcorrencias";

const useEnviaDados = (dataOcorrencia, reset, setOcorrencias, setAberta) => {
    const atualizarListaOcorrencias = useAtualizaOcorrencias();

    const handleEnviarDados = async (formData, aberta) => {
        try {
            console.log(aberta);
            formData.aberta = aberta;
            console.log('Dados Envio', formData)
            const response = await api.post('ocorrencias', formData);

            if (response.status === 200) {
                setOcorrencias((ocorrenciasAntigas) => {
                    const novasOcorrencias = atualizarListaOcorrencias(
                        ocorrenciasAntigas,
                        dataOcorrencia,
                        response.data,
                        aberta
                    );
                    reset();
                    if (aberta) setAberta(null);
                    return novasOcorrencias;
                });
            } else {
                console.log('Não foi possível enviar a ocorrência');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return handleEnviarDados;
};

export default useEnviaDados;
