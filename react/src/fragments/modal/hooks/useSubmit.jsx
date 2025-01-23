
const useOnSubmit = (dataOcorrencia, camposDeslocamentoPreenchidos, handleEnviarDados, setModalOpen) => {
    const handleOnSubmit = async (formData, id, aberta) => {
        try {
            formData.id = id;
            formData.evento = dataOcorrencia.evento;
            formData.cliente = dataOcorrencia.cliente;
            formData.deslocamento = formData.deslocamento === 'sim';

            const camposObrigatoriosPreenchidos = formData.tipoocorrencia && formData.subtipoocorrencia && formData.operador && formData.resumo;

            if (aberta === true && camposObrigatoriosPreenchidos) {
                console.log('aqui')
                await handleEnviarDados(formData, true);
                setModalOpen(false)
            } else if (aberta === true && !camposObrigatoriosPreenchidos) {
                console.log('aqui')
                await handleEnviarDados(formData, true);
                setModalOpen(false)
            } else if (aberta === false && camposObrigatoriosPreenchidos) {
                console.log('aqui')
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