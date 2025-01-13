const useCamposDeslocamento = () => {
    const camposDeslocamentoPreenchidos = (formData) => {
        return (
            formData.horasaidaemp &&
            formData.horachegadacliente &&
            formData.horasaidacliente &&
            formData.horachegadaemp &&
            formData.horaaberturalacre &&
            formData.lacre &&
            formData.kmsaida &&
            formData.kmretorno &&
            formData.resumo
        );
    };

    return camposDeslocamentoPreenchidos
};

export default useCamposDeslocamento