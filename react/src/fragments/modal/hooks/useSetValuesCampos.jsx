import { useEffect } from "react";
const useSetValuesCampos = (setModalOpen, dataOcorrencia, setValue, setSelectedValue) => {

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
            setValue('lacre', dataOcorrencia.lacre || '');
            setValue('horaaberturalacre', dataOcorrencia.horaaberturalacre || '');
            setValue('horasaidacliente', dataOcorrencia.horasaidacliente || '');
            setValue('horasaidaemp', dataOcorrencia.horasaidaemp || '');
            setValue('horalacre', dataOcorrencia.horalacre || '');
            setValue('horachegadacliente', dataOcorrencia.horachegadacliente || '');
            setValue('horachegadaemp', dataOcorrencia.horachegadaemp || '');
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