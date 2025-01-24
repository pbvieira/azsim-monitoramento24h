const useCamposDeslocamento = () => {
    const camposDeslocamentoPreenchidos = (formData) => {
        return (
            formData.ocorrenciapolicialresumo &&
            formData.agente &&
            formData.horasaidaemp &&
            formData.horachegadacliente &&
            formData.horasaidacliente &&
            formData.horachegadaemp &&
            formData.horaaberturalacre &&
            formData.lacre &&
            formData.kmsaida &&
            formData.kmretorno
        );
    };

    return camposDeslocamentoPreenchidos
};

export default useCamposDeslocamento