import { useNavigate } from 'react-router-dom';

const useNavigateToCadastroCliente = () => {
    const navigate = useNavigate();

    const navigateToCadastro = (url) => {
        navigate(`${url}`, { replace: true });
    };
    return navigateToCadastro;
};

export default useNavigateToCadastroCliente;
