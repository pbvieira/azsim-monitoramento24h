import { useEffect } from 'react';

const useChamaCarregaDadosCliente = (carregarDadosCliente) => {
    useEffect(() => {
        carregarDadosCliente();
    }, [carregarDadosCliente]);
};

export default useChamaCarregaDadosCliente;
