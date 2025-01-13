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
            setValue('horaSaida', dataOcorrencia.horaSaida || '');
            setValue('horaChegada', dataOcorrencia.horaChegada || '');
            setValue('tempDeslocamento', dataOcorrencia.tempDeslocamento || '');
            setValue('horaSaidaLocal', dataOcorrencia.horaSaidaLocal || '');
            setValue('horaChegadaEmpresa', dataOcorrencia.horaChegadaEmpresa || '');
            setValue('tempRetorno', dataOcorrencia.tempRetorno || '');
            setValue('horaAbateLacre', dataOcorrencia.horaAbateLacre || '');
            setValue('horaLacre', dataOcorrencia.horaLacre || '');
            setValue('tempAtendimento', dataOcorrencia.tempAtendimento || '');
            setValue('kmSaida', dataOcorrencia.kmsaida || '');
            setValue('kmRetorno', dataOcorrencia.kmretorno || '');
            setValue('kmTotal', dataOcorrencia.kmtotal || '');
            setValue('resumo', dataOcorrencia.resumo || '');
            setValue('procedimentos', dataOcorrencia.procedimento || '');
            setValue('ocorrenciapolicialresumo', dataOcorrencia.ocorrenciapolicialresumo || '');
            setSelectedValue(dataOcorrencia.deslocamento ? 'sim' : 'nao');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataOcorrencia, setValue]);
}

export default useSetValuesCampos