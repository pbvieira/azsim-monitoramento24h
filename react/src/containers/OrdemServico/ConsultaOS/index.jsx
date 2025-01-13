import { useState } from "react";
import usePegaOS from "./hooks/handlePegaOS";
import { Container, Fundo } from "../../../components/Formularios/Form";
import HeaderPage from "../../../components/HeaderPages";
import Filtro from "./fragments/Filtro";
import ValorFiltroReq from "./fragments/ValorFiltroReq";
import { Exibicao } from "./styles";
import HeaderOS from "./fragments/HeaderOS";
import OSRow from "./fragments/OSRow";
// import MensagemTabela from "../../clientes/consulta-cliente/fragments/MensagemTabela";
import api from "../../../services/api";
import LegendaIcon from "./fragments/Legenda";


function ConsultaOS() {


    const mockOrdemServico = [
        {
            id: 1,
            cliente: "João Silva",
            servico: "Manutenção de sistema",
            status: "Em andamento",
            dataInicio: "02/12/2024",
            dataFim: "02/12/2024",
            responsavel: "Maria Oliveira",
        },
        {
            id: 2,
            cliente: "Ana Souza",
            servico: "Instalação de software",
            status: "Finalizado",
            dataInicio: "20/10/2024",
            dataFim: "21/10/2024",
            responsavel: "Carlos Pereira",
        },
        {
            id: 3,
            cliente: "Pedro Costa",
            servico: "Atualização de sistema",
            status: "Pendente",
            dataInicio: "01/12/2024",
            dataFim: "Serviço Pendente",
            responsavel: "Renata Lima",
        },
    ];


    const [ordemServico, setOrdemServico] = useState(mockOrdemServico)
    const [filtro, setFiltro] = useState('')
    const [dadosBasicos, setDadosBasicos] = useState({});

    const handlePegaOSs = usePegaOS({
        setOrdemServico,
        filtro,
        api
    });

    // const OrdensServicoParaExibir = filtro ? ordemServico : '';

    return (
        <Container>
            <HeaderPage title="Consulta de OS" subtitle={'Consulte os dados de suas OS'} location={'Home > Consulta de OS'} />
            <Fundo>
                <Filtro
                    filtro={filtro}
                    onChange={(e) => ValorFiltroReq(e, setFiltro, setOrdemServico)}
                    onSearch={handlePegaOSs}
                />
                <Exibicao>
                    {/* {OrdensServicoParaExibir.length > 0 ? ( */}
                    <>
                        <HeaderOS />
                        {ordemServico.map((ordemServico, index) => (
                            <OSRow key={index} ordemServico={ordemServico} index={index} dadosBasicos={dadosBasicos} setDadosBasicos={setDadosBasicos} api={api} />
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

export default ConsultaOS;