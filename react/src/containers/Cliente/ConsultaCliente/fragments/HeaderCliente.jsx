import { Codificador, Nome, Unidade, VerMais } from "../styles";

function HeaderCliente() {
    return (
        <div className="headerConsulta">
            <Nome>Nome</Nome>
            <Codificador>Codificador</Codificador>
            <Unidade>Unidade</Unidade>
            <VerMais>Ver Mais</VerMais>
        </div>
    )
}

export default HeaderCliente