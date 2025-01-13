import { Row, DataEvento, CodificadorEvento, StatusEvento, NomeEvento, CidadeEvento } from "../styles";

const HeaderEventos = () => (
    <Row className="header">
        <DataEvento>Data</DataEvento>
        <CodificadorEvento>Cod.</CodificadorEvento>
        <StatusEvento>Status</StatusEvento>
        <NomeEvento>Nome</NomeEvento>
        <CidadeEvento>Cidade</CidadeEvento>
    </Row>
);

export default HeaderEventos;
