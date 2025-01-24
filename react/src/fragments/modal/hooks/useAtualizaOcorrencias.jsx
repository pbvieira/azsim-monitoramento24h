const useAtualizaOcorrencias = () => {
    const atualizarListaOcorrencias = (ocorrenciasAntigas, dataOcorrencia, responseData, aberta) => {
        if (aberta === true) {
            return ocorrenciasAntigas.map((ocorrencia) =>
                ocorrencia.id === dataOcorrencia.id ? responseData : ocorrencia
            );
        } else {
            return ocorrenciasAntigas.filter((ocorrencia) => ocorrencia.id !== dataOcorrencia.id);
        }
    };

    return atualizarListaOcorrencias
}
export default useAtualizaOcorrencias;
