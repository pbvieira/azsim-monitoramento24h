
const usePegaOS = ({ filtro, api, setOSs }) => {


    const handlePegaOS = async () => {
        try {
            const response = await api.get(`/OS`, {
                params: { nome: filtro },
            });
            setOSs([])
            setOSs(response.data);
        } catch (error) {
            console.error('Erro ao buscar OSs:', error);
        }
    };
    return handlePegaOS;
};

export default usePegaOS;


