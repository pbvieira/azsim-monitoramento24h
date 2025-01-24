import api from "../../../services/api";
import useAtualizaOcorrencias from "./useAtualizaOcorrencias";
import useConverteHoraFromForm from "./useConvertTimeFromForm";

const useEnviaDados = (dataOcorrencia, reset, setOcorrencias, setAberta) => {
    const atualizarListaOcorrencias = useAtualizaOcorrencias();
    const { converterHoraFromForm } = useConverteHoraFromForm();

    const handleEnviarDados = async (formData, aberta) => {
        try {
            formData.aberta = aberta;
            const camposDeHora = {
                horaaberturalacre: formData.horaaberturalacre,
                horalacre: formData.horalacre,
                horachegadacliente: formData.horachegadacliente,
                horachegadaemp: formData.horachegadaemp,
                horasaidacliente: formData.horasaidacliente,
                horasaidaemp: formData.horasaidaemp,
            };
            const horasConvertidas = converterHoraFromForm(camposDeHora);
            formData = {
                ...formData,
                ...horasConvertidas,
            };
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
