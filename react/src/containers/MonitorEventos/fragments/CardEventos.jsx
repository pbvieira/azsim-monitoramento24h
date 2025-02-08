/* eslint-disable react/prop-types */
import { useState, Fragment, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { CidadeEvento, CodificadorEvento, DataEvento, NomeEvento, Row, StatusEvento } from "../styles";
import api from "../../../services/api";

function CardEventos({ index, borderColor, data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filtro, setFiltro] = useState('');
    const [clientes, setClientes] = useState([]);
    const [codificador, setCodificador] = useState(null);

    const handleCodificadorClick = () => {
        if (data.nmcliente.startsWith(' - ')) {
            setCodificador(data.codificador);
            setIsModalOpen(true);
        }
    };

    const codificadorClass = data.nmcliente.startsWith(' - ') ? 'clickable' : 'disabled';

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const buscarClientes = useCallback(async () => {
        try {
            let response;
            if (filtro) {
                response = await api.get(`/clientes?nome=${filtro}`);
            } else {
                response = await api.get('/clientes');
            }
            const clientesSemCodificador = response.data.filter(cliente => !cliente.codificador);
            setClientes(clientesSemCodificador);
        } catch (error) {
            console.log(error);
        }
    }, [filtro]);

    useEffect(() => {
        if (filtro) {
            buscarClientes();
        } else {
            setClientes([]);
        }
    }, [filtro, buscarClientes]);

    const clientesFiltrados = clientes.filter((cliente) =>
        cliente.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    const clientesParaExibir = filtro ? clientesFiltrados : [];

    const handleVincularCodificador = async (cliente) => {
        cliente.codificador = codificador;

        try {
            await axios.post(`http://127.0.0.1:8080/api/cliente`, cliente);
            setIsModalOpen(false);
            alert('Codificador vinculado com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Erro ao vincular o codificador.');
        }
    };

    return (
        <Fragment key={index}>
            <Row style={{
                borderLeft: `10px solid ${borderColor}`
            }}>
                <DataEvento>
                    <span title={data.datacadastro ? new Date(data.datacadastro).toLocaleString('pt-BR') : 'N/E'}> {data.datacadastro ? new Date(data.datacadastro).toLocaleString('pt-BR') : 'N/E'}</span>
                </DataEvento>
                <CodificadorEvento codificador={codificadorClass} onClick={handleCodificadorClick}>
                    <span title={data.codificador ? data.codificador : 'N/E'}> {data.codificador ? data.codificador : 'N/E'}</span>
                </CodificadorEvento>
                <StatusEvento>
                    <span> {data.status ? data.status.slice(0, 40) : 'N/E'} .{data.referencia ? data.referencia.slice(0, 40) : 'N/E'}</span> -  &nbsp;
                    <span title={data.destatus ? data.destatus : 'N/E'}>{data.destatus ? data.destatus.slice(0, 40) : 'N/E'}</span>
                </StatusEvento>
                <NomeEvento>
                    <span title={data.nmcliente ? data.nmcliente : 'N/E'}>  {data.nmcliente ? data.nmcliente.slice(0, 40) : 'N/E'}</span>
                </NomeEvento>
                <CidadeEvento>
                    <span title={data.cidade ? data.cidade : 'N/E'}> {data.cidade ? data.cidade.slice(0, 40) : 'N/E'}</span>
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
