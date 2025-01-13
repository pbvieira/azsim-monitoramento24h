
const useOnSubmit = (dataOcorrencia, camposDeslocamentoPreenchidos, setShowModal, handleEnviarDados, setModalOpen) => {
    const handleOnSubmit = async (formData, id, encerra) => {
        try {
            formData.id = id;
            formData.evento = dataOcorrencia.evento;
            formData.cliente = dataOcorrencia.cliente;
            formData.deslocamento = formData.deslocamento === 'sim';

            const camposObrigatoriosPreenchidos = formData.tipoocorrencia && formData.subtipoocorrencia && formData.operador && formData.resumo;
            const todosCamposPreenchidos = formData.deslocamento ? camposDeslocamentoPreenchidos(formData) : true;

            if (encerra === null && camposObrigatoriosPreenchidos && todosCamposPreenchidos) {
                setShowModal(true);
                return;
            } else if (encerra === true && camposObrigatoriosPreenchidos && todosCamposPreenchidos) {
                await handleEnviarDados(formData, true);
                setModalOpen(false)
            } else if (encerra === false && camposObrigatoriosPreenchidos && todosCamposPreenchidos) {
                await handleEnviarDados(formData, false);
                setModalOpen(false)
            } else {
                if (encerra === null) {
                    await handleEnviarDados(formData, false);
                    setModalOpen(false)
                }
            }
        } catch (error) {
            console.error('Erro ao enviar a ocorrência:', error);
        }
    };
    return handleOnSubmit
}
export default useOnSubmit