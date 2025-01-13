import { Cliente, Codificador, Unidade, DataEncerramento, DataCadastro, EmUso, VerMais } from "../styles"

function HeaderCodificador() {
    return (
        <div className="headerConsulta">
            <Codificador>Codificador</Codificador>
            <Cliente>Cliente</Cliente>
            <Unidade>Unidade</Unidade>
            <DataCadastro>Data Cadastro</DataCadastro>
            <DataEncerramento>Data Encerramento</DataEncerramento>
            <EmUso>Em Uso</EmUso>
            <VerMais>Ver Mais</VerMais>
        </div>
    )
}

export default HeaderCodificador