import useNavigateToCadastroCliente from "../../../../hooks/UseNavigate";
import useReloadPage from "../../../../hooks/UseReloadPage";
import useScrollToTop from "../../../../hooks/UseScrollToTop";


const useHandleNovoCliente = (dadosBasicos, setDadosBasicos) => {
    const navigateToCadastro = useNavigateToCadastroCliente();
    const scrollToTop = useScrollToTop();
    const reloadPage = useReloadPage();

    const handleNovoCliente = () => {
        setDadosBasicos(dadosBasicos);
        navigateToCadastro('/azsim/cadastroCliente')
        scrollToTop();
        reloadPage();
    };

    return handleNovoCliente;
};

export default useHandleNovoCliente;
