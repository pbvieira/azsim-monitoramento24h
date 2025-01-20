
const useOnSubmit = (dataOcorrencia, camposDeslocamentoPreenchidos, handleEnviarDados, setModalOpen) => {
    const handleOnSubmit = async (formData, id, aberta) => {
        try {
            formData.id = id;
            formData.evento = dataOcorrencia.evento;
            formData.cliente = dataOcorrencia.cliente;
            formData.deslocamento = formData.deslocamento === 'sim';

            const camposObrigatoriosPreenchidos = formData.tipoocorrencia && formData.subtipoocorrencia && formData.operador && formData.resumo;
            const todosCamposPreenchidos = formData.deslocamento ? camposDeslocamentoPreenchidos(formData) : true;

            if (aberta === true && camposObrigatoriosPreenchidos && todosCamposPreenchidos) {
                await handleEnviarDados(formData, true);
                setModalOpen(false)
            } else if (aberta === false && camposObrigatoriosPreenchidos && todosCamposPreenchidos) {
                await handleEnviarDados(formData, false);
                setModalOpen(false)
            }
        } catch (error) {
            console.error('Erro ao enviar a ocorrência:', error);
        }
    };
    return handleOnSubmit
}
export default useOnSubmit