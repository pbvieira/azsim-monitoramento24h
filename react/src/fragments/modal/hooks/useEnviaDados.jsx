import api from "../../../services/api";
import useAtualizaOcorrencias from "./useAtualizaOcorrencias"; // ajuste o caminho conforme necessário

const useEnviaDados = (dataOcorrencia, reset, setColocaOcorrenciasNaTela, setEncerra) => {
    const { atualizarListaOcorrencias } = useAtualizaOcorrencias();

    const handleEnviarDados = async (formData, encerra) => {
        try {
            console.log(encerra);
            formData.aberta = encerra;
            const response = await api.post('ocorrencia', formData);

            if (response.status === 200) {
                setColocaOcorrenciasNaTela((ocorrenciasAntigas) => {
                    const novasOcorrencias = atualizarListaOcorrencias(
                        ocorrenciasAntigas,
                        dataOcorrencia,
                        response.data,
                        encerra
                    );
                    reset();
                    if (encerra) setEncerra(null);
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
