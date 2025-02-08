/* eslint-disable react/prop-types */
import { useState, Fragment, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { CidadeEvento, CodificadorEvento, DataEvento, NomeCliente, Row, StatusEvento } from "../styles";
import api from "../../../services/api";

function CardEventos({ index, borderColor, data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filtro, setFiltro] = useState('');

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Fragment key={index}>
            <Row style={{
                borderLeft: `10px solid ${borderColor}`
            }}>
                <DataEvento>
                    <span title={data.datacadastro ? new Date(data.datacadastro).toLocaleString('pt-BR') : ' - '}> {data.datacadastro ? new Date(data.datacadastro).toLocaleString('pt-BR') : ' - '}</span>
                </DataEvento>
                <CodificadorEvento>
                    <span title={data.codificador ? data.codificador : ' - '}> {data.codificador ? data.codificador : ' - '}</span>
                </CodificadorEvento>
                <StatusEvento>
                    <span> {data.status ? data.status.slice(0, 40) : ' - '} .{data.referencia ? data.referencia.slice(0, 40) : ' - '}</span> -  &nbsp;
                    <span title={data.destatus ? data.destatus : ' - '}>{data.destatus ? data.destatus.slice(0, 40) : ' - '}</span>
                </StatusEvento>
                <NomeCliente>
                    <span title={data.nmcliente ? data.nmcliente : ' - '}>  {data.nmcliente ? data.nmcliente.slice(0, 40) : ' - '}</span>
                </NomeCliente>
                <CidadeEvento>
                    <span title={data.cidade ? data.cidade : ' - '}> {data.cidade ? data.cidade.slice(0, 40) : ' - '}</span>
                </CidadeEvento>
            </Row>
            {
                isModalOpen && (
                    <div className="modal modal1" onClick={closeModal}>
                        <div className="modal-content modal-content1" onClick={(e) => e.stopPropagation()}>
                            <span className="close close1" onClick={closeModal}>&times;</span>
                            <div className="inputDiv mb-4">
                                <input
                                    className='form-control'
                                    type="text"
                                    name="filtroNome"
                                    id="filtroEvento"
                                    placeholder='Digite para filtrar...'
                                    value={filtro}
                                    onChange={(e) => setFiltro(e.target.value)}
                                />
                            </div>
                            <div className="listaUsuariosSemCodificador">
                                <div className="divTabela1">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">id</th>
                                                <th scope="col">Nome</th>
                                                <th scope="col">Vincular</th>
                                            </tr>
                                        </thead>
                                        <tbody className="listaClientesParaVincular">
                                            {clientesParaExibir.length > 0 ? (
                                                clientesParaExibir.map((cliente) => (
                                                    <tr key={cliente.id}>
                                                        <td className="col-2 tdTabela">{cliente.unidade}</td>
                                                        <td className="col-3 tdTabela">
                                                            <p>{cliente.nome}</p>
                                                        </td>
                                                        <td className="col-2 tdTabela">
                                                            <button className='btnEdit' onClick={() => handleVincularCodificador(cliente)}>
                                                                <i className="bi bi-link" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <div>
                                                    <p colSpan="3" className="txtauxilio">
                                                        {filtro ? 'Refine sua pesquisa' : 'Digite o cliente desejado'}
                                                    </p>
                                                </div>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment >
    );
}

CardEventos.propTypes = {
    index: PropTypes.number.isRequired,
    gravidadeClassEvento: PropTypes.string.isRequired,
    data: PropTypes.shape({
        dataevento: PropTypes.string,
        codificador: PropTypes.number,
        status: PropTypes.string,
        referencia: PropTypes.string,
        destatus: PropTypes.string,
        nmcliente: PropTypes.string,
        cidade: PropTypes.string,
    }).isRequired,
};


export default CardEventos;
