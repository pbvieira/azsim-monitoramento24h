const useAtualizaOcorrencias = () => {
    const atualizarListaOcorrencias = (ocorrenciasAntigas, dataOcorrencia, responseData, aberta) => {
        if (aberta === true) {
            console.log('Foi possível enviar a ocorrência, lista atualizada e card mantido');
            return ocorrenciasAntigas.map((ocorrencia) =>
                ocorrencia.id === dataOcorrencia.id ? responseData : ocorrencia
            );
        } else {
            console.log('Foi possível enviar a ocorrência, card retirado da lista');
            return ocorrenciasAntigas.filter((ocorrencia) => ocorrencia.id !== dataOcorrencia.id);
        }
    };

    return atualizarListaOcorrencias
}
export default useAtualizaOcorrencias;
