import { useState } from "react";
import { Container, Fundo } from "../../../components/Formularios/Form";
import HeaderPage from "../../../components/HeaderPages";
import Filtro from "./fragments/Filtro";
import ValorFiltroReq from "./fragments/ValorFiltroReq";
import { Exibicao } from "./styles";
import HeaderCodificador from "./fragments/HeaderCodificador";
import CodificadorRow from "./fragments/codificadorRow";
// import MensagemTabela from "../../clientes/consulta-cliente/fragments/MensagemTabela";
import api from "../../../services/api";
import LegendaIcon from "./fragments/Legenda";
import usePegaCodificadores from "./hooks/handlePegaCodificador";


function ConsultaCodificador() {


    const mockCodificadores = [
        {
            id: 1,
            codificador: "1234",
            cliente: "Mário da Silva Fernandes",
            unidade: "Montenegro",
            dataCadastro: "02/12/2024",
            dataEncerramento: "02/12/2024",
            emUso: "ativo",
        },
        {
            id: 2,
            codificador: "5678",
            cliente: "Ana Beatriz Costa",
            unidade: "Lajeado",
            dataCadastro: "30/11/2024",
            dataEncerramento: "02/12/2024",
            emUso: "ativo",
        },
        {
            id: 3,
            codificador: "9101",
            cliente: "João Pedro Almeida",
            unidade: "Lajeado",
            dataCadastro: "01/12/2024",
            dataEncerramento: "02/12/2024",
            emUso: "inativo",
        },
    ];


    const [codificadores, setCodificadores] = useState(mockCodificadores)
    const [filtro, setFiltro] = useState('')
    const [dadosBasicos, setDadosBasicos] = useState({});

    const handlePegaCodificadores = usePegaCodificadores({
        setCodificadores,
        filtro,
        api
    });

    // const OrdensServicoParaExibir = filtro ? ordemServico : '';

    return (
        <Container>
            <HeaderPage title="Consulta de Codificadores" subtitle={'Consulte os dados de seus Codificadores'} location={'Home > Consulta de codificadores'} />
            <Fundo>
                <Filtro
                    filtro={filtro}
                    onChange={(e) => ValorFiltroReq(e, setFiltro, setCodificadores)}
                    onSearch={handlePegaCodificadores}
                />
                <Exibicao>
                    {/* {OrdensServicoParaExibir.length > 0 ? ( */}
                    <>
                        <HeaderCodificador />
                        {codificadores.map((codificador, index) => (
                            <CodificadorRow key={index} codificador={codificador} index={index} dadosBasicos={dadosBasicos} setDadosBasicos={setDadosBasicos} api={api} />
                        ))}
                    </>
                    {/* // ) : filtro && OrdensServicoParaExibir.length === 0 ? (
                        //     <MensagemTabela msg={'Nenhum resultado encontrado. Refine sua pesquisa para obter resultados.'} />
                        // ) : (
                        //     <MensagemTabela msg={'Filtre para ter resultados.'} />
                        // )} */}
                </Exibicao>
                <LegendaIcon />
            </Fundo>
        </Container>
    );
}

export default ConsultaCodificador;