import { Servico, Cliente, Status, DataFim, DataInicio, Responsavel, VerMais } from "../styles"

function HeaderOS() {
    return (
        <div className="headerConsulta">
            <Cliente>Cliente</Cliente>
            <Servico>Serviço</Servico>
            <Status>Status</Status>
            <DataInicio>Data Inicio</DataInicio>
            <DataFim>Data Fim</DataFim>
            <Responsavel>Responsável</Responsavel>
            <VerMais>Ver Mais</VerMais>
        </div>
    )
}

export default HeaderOS