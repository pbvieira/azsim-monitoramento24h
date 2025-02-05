import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Informacoes, Infos, Navbar } from '../style';


function Header({ dataOcorrencia }) {

    return (
        <Fragment>

            <Navbar>
                <div >
                    <h3>
                        {dataOcorrencia.evento.destatus} {dataOcorrencia.evento.local ? ' - ' + dataOcorrencia.evento.local : ''}
                    </h3>
                </div>
            </Navbar>

            <Informacoes>
                <Infos>
                    <div>
                        <strong>Cliente: </strong>
                        {dataOcorrencia && dataOcorrencia.evento ? dataOcorrencia.evento.nmcliente : "nao disponivel"}
                    </div>
                    <div>
                        <strong>Endereço: </strong>
                        {dataOcorrencia && dataOcorrencia.evento ? dataOcorrencia.evento.endereco : "nao disponivel"}
                        &nbsp; &nbsp;
                        <strong>Bairro: </strong>
                        {dataOcorrencia && dataOcorrencia.evento ? dataOcorrencia.evento.bairro : "nao disponivel"}
                        &nbsp; &nbsp;
                        <strong>Cidade: </strong>
                        {dataOcorrencia && dataOcorrencia.evento ? dataOcorrencia.evento.cidade : "nao disponivel"}
                    </div>
                </Infos>
                <Infos>
                    <div>
                        <strong>Data: </strong>
                        {dataOcorrencia && dataOcorrencia.evento
                            ? new Date(dataOcorrencia.evento.dataevento).toLocaleDateString('pt-BR')
                            : 'Não disponível'}
                    </div>
                    <div>
                        <strong>Hora: </strong>
                        {dataOcorrencia && dataOcorrencia.evento
                            ? new Date(dataOcorrencia.evento.dataevento).toLocaleTimeString('pt-BR')
                            : 'Não disponível'}
                    </div>
                </Infos>
            </Informacoes>
        </Fragment>
    )

}

Header.propTypes = {
    dataOcorrencia: PropTypes.object.isRequired
}

export default Header;