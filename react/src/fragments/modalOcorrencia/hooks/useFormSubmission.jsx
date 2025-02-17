
const useFormSubmission = (handleSubmit, dataOcorrencia, handleOnSubmit, botaoRef, setShowModal) => {

    const validateForm = (formData) => {
        return formData.operador && formData.tipoocorrencia && formData.subtipoocorrencia && formData.resumo;
    };

    const handleLastFieldBlur = (formData) => {
        if (validateForm(formData)) {
            setShowModal(true);
        }
    };

    const handleButtonAction = (formData) => {
        if (validateForm(formData)) {
            setShowModal(true);
        } else {
            handleSubmit((formData) => handleOnSubmit(formData, dataOcorrencia.id, true))();
        }
    };

    return {
        handleLastFieldBlur,
        handleButtonAction
    };
};

export default useFormSubmission;
