import PropTypes from 'prop-types';
import { CardContatos, CardHeaderSetores, CardSetores, CardViagem, FundoContatos, FundoSetores, FundoViagem, InformacoesTabs, Row, RowViagem, Tabs } from '../style';
import { format, parseISO } from 'date-fns';

function TabsInformacoes({ dataOcorrencia }) {

    const formatBackendDate = (dateString) => {
        try {
            const parsedDate = parseISO(dateString);
            parsedDate.setDate(parsedDate.getDate() + 1);
            return format(parsedDate, 'dd/MM/yyyy');
        } catch (error) {
            return '';
        }
    };
    return (
        <InformacoesTabs>
            <Tabs>
                <ul className="nav nav-tabs text-start mt-3 ms-2 justify-content-start" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button title="Tab Contatos" className="nav-link active" id={`contatos-tab-${dataOcorrencia.id}`} data-bs-toggle="tab"
                            data-bs-target={`#contatos-${dataOcorrencia.id}`} type="button" role="tab" aria-controls="contatos"
                            aria-selected="true">Contatos
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button title="Tab Setores" className="nav-link" id={`setorizacao-tab-${dataOcorrencia.id}`} data-bs-toggle="tab"
                            data-bs-target={`#setorizacao-${dataOcorrencia.id}`} type="button" role="tab" aria-controls="setorizacao"
                            aria-selected="false">Setorização
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button title="Tab Viagens" className="nav-link" id={`viagens-tab-${dataOcorrencia.id}`} data-bs-toggle="tab" data-bs-target={`#viagens-${dataOcorrencia.id}`}
                            type="button" role="tab" aria-controls="viagens" aria-selected="false">Viagens
                        </button>
                    </li>
                </ul>
            </Tabs>

            <div className="tab-content" id={`myTabContent-${dataOcorrencia.id}`}>

                <div className="tab-pane fade show active" id={`contatos-${dataOcorrencia.id}`} role="tabpanel"
                    aria-labelledby={`contatos-tab-${dataOcorrencia.id}`}>
                    <div className="p-3 mt-2 mb-2">
                        <FundoContatos>
                            <div className="contentTabs">

                                {dataOcorrencia?.cliente?.contatos?.length > 0 ? (
                                    dataOcorrencia.cliente.contatos.map((contato, index) => (
                                        <CardContatos key={index}>
                                            <Row>
                                                <div title={contato.nome || "Não disponível"}>
                                                    Nome: {contato.nome || "Não disponível"}
                                                </div>
                                                <div title={contato.telefone || "Não disponível"}>
                                                    Telefone: {contato.telefone || "Não disponível"}
                                                </div>
                                            </Row>
                                            <Row>
                                                <div title={contato.senha || "Não disponível"}>
                                                    Senha: {contato.senha || "Não disponível"}
                                                </div>
                                                <div title={contato.contraSenha || "Não disponível"}>
                                                    Contra-senha: {contato.contraSenha || "Não disponível"}
                                                </div>
                                            </Row>
                                        </CardContatos>
                                    ))
                                ) : (
                                    <div>
                                        Nenhum contato cadastrado.
                                    </div>
                                )}
                            </div>
                        </FundoContatos>
                    </div>
                </div>


                <div className="tab-pane fade" id={`setorizacao-${dataOcorrencia.id}`} role="tabpanel" aria-labelledby={`setorizacao-tab-${dataOcorrencia.id}`}>

                    <div className="ps-3 mb-2">

                        <FundoSetores>
                            <CardHeaderSetores>
                                <div className="row">
                                    <div className="col">
                                        <div className="mt-1 h6" title={dataOcorrencia?.cliente?.codificador || "Não disponível"}>
                                            <i className="bi bi-upc"></i>Codificador: <span />
                                            {dataOcorrencia?.cliente?.codificador || "Não disponível"}
                                        </div>
                                        <div className="mt-1 h6" title={dataOcorrencia?.cliente?.modeloCentral || "Não disponível"}>
                                            <i className="bi bi-modem"></i>Modelo central: <span />
                                            {dataOcorrencia?.cliente?.modeloCentral || "Não disponível"}
                                        </div>
                                    </div>
                                </div>
                            </CardHeaderSetores>
                            <div className="contentTabs">
                                {dataOcorrencia?.cliente?.setores?.length > 0 ? (
                                    dataOcorrencia.cliente.setores.map((setor, index) => (
                                        <CardSetores key={index}>
                                            <Row>
                                                <div>
                                                    <div title={setor.setor || "Não disponível"}>Setor:  {setor.setor || "Não disponível"} &nbsp;</div>
                                                    <div>Local da instalação: {setor.localizacao || "Não disponível"}</div>
                                                </div>
                                                <div title={setor.observacao || "Não disponível"}>Observações:  {setor.observacao || "Nenhuma observação"}</div>
                                            </Row>

                                        </CardSetores>
                                    ))
                                ) : (
                                    <div className="col">
                                        Nenhum Setor cadastrado.
                                    </div>
                                )}
                            </div>
                        </FundoSetores>
                    </div>

                </div>


                <div className="tab-pane fade" id={`viagens-${dataOcorrencia.id}`} role="tabpanel" aria-labelledby={`viagens-tab-${dataOcorrencia.id}`}>
                    <div className="p-3 mt-2 mb-2">

                        <FundoViagem>
                            <div className="contentTabs">
                                {dataOcorrencia?.cliente?.viagens?.length > 0 ? (
                                    dataOcorrencia.cliente.viagens.map((viagem, index) => (

                                        <CardViagem key={index}>
                                            <RowViagem>
                                                <div>
                                                    <div title={viagem.dataSaida ? formatBackendDate(viagem.dataSaida) : "Não disponível"}>
                                                        Data saída: <span />
                                                        {viagem.dataSaida ? formatBackendDate(viagem.dataSaida) : "Não disponível"}
                                                    </div>
                                                    <div title={viagem.dataVolta ? formatBackendDate(viagem.dataVolta) : "Não disponível"}>
                                                        Data volta: <span />
                                                        {viagem.dataVolta ? formatBackendDate(viagem.dataVolta) : "Não disponível"}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div title={viagem.procedimento || "Não disponível"}>Procedimentos:  {viagem.procedimento || "Nenhum procedimento registrado"}</div>
                                                    <div title={viagem.observacao || "Não disponível"}>Observações: {viagem.observacao || "Nenhuma observação"}</div>
                                                </div>
                                            </RowViagem>
                                        </CardViagem>

                                    ))
                                ) : (
                                    <div className="col t-center">
                                        Nenhuma viagem cadastrada.
                                    </div>
                                )}
                            </div>
                        </FundoViagem>
                    </div>
                </div>
            </div>
        </InformacoesTabs >
    );
}

TabsInformacoes.propTypes = {
    dataOcorrencia: PropTypes.object.isRequired,
};

export default TabsInformacoes;
