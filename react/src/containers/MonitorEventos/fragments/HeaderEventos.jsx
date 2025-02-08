import { Row, DataEvento, CodificadorEvento, StatusEvento, NomeCliente, CidadeEvento } from "../styles";

const HeaderEventos = () => (
    <Row className="header">
        <DataEvento>Data</DataEvento>
        <CodificadorEvento>Cod.</CodificadorEvento>
        <StatusEvento>Status</StatusEvento>
        <NomeCliente>Nome</NomeCliente>
        <CidadeEvento>Cidade</CidadeEvento>
    </Row>
);

export default HeaderEventos;
