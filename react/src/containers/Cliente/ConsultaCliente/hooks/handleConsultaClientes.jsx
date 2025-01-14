const useConsultaCliente = ({ filtro, api, setClientes, setConsultaRealizada }) => {
    const handleConsultaCliente = async () => {
        setConsultaRealizada(false);
        try {
            const response = await api.get(`/clientes`, {
                params: { nome: filtro },
            });
            setClientes(response.data);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
            setClientes([]);
        } finally {
            setConsultaRealizada(true);
        }
    };

    return handleConsultaCliente;
};

export default useConsultaCliente;
