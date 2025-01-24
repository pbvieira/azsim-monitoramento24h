import { useEffect } from "react";
import { useConvertHoraToFrontend } from "../fragments/hooks/useConvertTime";
const useSetValuesCampos = (setModalOpen, dataOcorrencia, setValue, setSelectedValue) => {
    const { convertHoraToFrontend } = useConvertHoraToFrontend();

    useEffect(() => {
        setModalOpen(true)
        if (dataOcorrencia) {
            setValue('tipoocorrencia', dataOcorrencia.tipoocorrencia || '');
            setValue('subtipoocorrencia', dataOcorrencia.subtipoocorrencia || '');
            setValue('operador', dataOcorrencia.operador || '');
            setValue('deslocamento', dataOcorrencia.deslocamento || 'nao');
            setValue('idagente', dataOcorrencia.idagente || '');
            setValue('agente', dataOcorrencia.agente || '');
            setValue('tempDeslocamento', dataOcorrencia.tempDeslocamento || '');
            setValue('tempRetorno', dataOcorrencia.tempRetorno || '');
            setValue('tempAtendimento', dataOcorrencia.tempAtendimento || '');
            setValue('lacre', convertHoraToFrontend(dataOcorrencia.lacre) || '');
            setValue('horaaberturalacre', convertHoraToFrontend(dataOcorrencia.horaaberturalacre) || '');
            setValue('horasaidacliente', convertHoraToFrontend(dataOcorrencia.horasaidacliente) || '');
            setValue('horasaidaemp', convertHoraToFrontend(dataOcorrencia.horasaidaemp) || '');
            setValue('horalacre', convertHoraToFrontend(dataOcorrencia.horalacre) || '');
            setValue('horachegadacliente', convertHoraToFrontend(dataOcorrencia.horachegadacliente) || '');
            setValue('horachegadaemp', convertHoraToFrontend(dataOcorrencia.horachegadaemp) || '');
            setValue('kmSaida', dataOcorrencia.kmsaida || '');
            setValue('kmRetorno', dataOcorrencia.kmretorno || '');
            setValue('kmTotal', dataOcorrencia.kmtotal || '');
            setValue('resumo', dataOcorrencia.resumo || '');
            setValue('procedimentos', dataOcorrencia.procedimento || '');
            setValue('ocorrenciapolicialresumo', dataOcorrencia.ocorrenciapolicialresumo || '');
            setSelectedValue(dataOcorrencia.deslocamento ? 'sim' : 'nao');
        }
        console.log(dataOcorrencia)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataOcorrencia]);
}

export default useSetValuesCampos