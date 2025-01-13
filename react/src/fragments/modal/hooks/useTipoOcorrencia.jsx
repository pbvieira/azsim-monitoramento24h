const useTipoOcorrencia = (setSelectedCategory) => {

    const handleSelectTipoOcorrencia = (e) => {
        setSelectedCategory(e.target.value);
    };

    return handleSelectTipoOcorrencia
};

export default useTipoOcorrencia;