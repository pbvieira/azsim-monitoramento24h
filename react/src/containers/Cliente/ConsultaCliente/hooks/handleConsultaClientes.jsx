
const useConsultaCliente = ({ filtro, api, setClientes }) => {

    const handleConsultaCliente = async () => {
        try {
            const response = await api.get(`/clientes`, {
                params: { nome: filtro },
            });
            setClientes([])
            setClientes(response.data);

        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };
    return handleConsultaCliente;
};

export default useConsultaCliente;


