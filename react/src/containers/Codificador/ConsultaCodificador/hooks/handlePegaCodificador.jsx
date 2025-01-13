
const usePegaCodificadores = ({ filtro, api, setCodificadors }) => {


    const handlePegaCodificadores = async () => {
        try {
            const response = await api.get(`/codificadores`, {
                params: { nome: filtro },
            });
            setCodificadors([])
            setCodificadors(response.data);
        } catch (error) {
            console.error('Erro ao buscar Codificadores:', error);
        }
    };
    return handlePegaCodificadores;
};

export default usePegaCodificadores;


