import { useCallback } from "react";

const useModalLogic = (setAberta, setShowModal, handleSubmit, onSubmit, dataOcorrencia) => {
    const EncerraBoolean = useCallback((boolean) => {
        return new Promise((resolve) => {
            if (boolean === "false") {
                setAberta(false);
                resolve(false);
            } else if (boolean === "true") {
                setAberta(true);
                resolve(true);
            }
            setShowModal(false);
        });
    }, [setAberta, setShowModal]);

    const handleConfirm = useCallback(
        (boolean) => {
            EncerraBoolean(boolean).then((result) => {
                handleSubmit((formData) => onSubmit(formData, dataOcorrencia.id, result))();
            });
        },
        [EncerraBoolean, handleSubmit, onSubmit, dataOcorrencia]
    );

    return { handleConfirm };
};

export default useModalLogic;
