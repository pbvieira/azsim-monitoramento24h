/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Buttons, Form, Input, Row, Title } from '../style';
import ReactInputMask from 'react-input-mask';

function ModalViagem({ viagens, setShowModal, setViagens, handleViagensDateChange, handleSave }) {
    return (
        <>
            <Title><h5>{viagens.index !== null ? 'Editar Viagem' : 'Adicionar Nova Viagem'}</h5></Title>
            <div className="divButton">
                <button id="btnFechar" className="btn " onClick={() => setShowModal(false)}>X</button>
            </div>
            <Form>
                <Row>
                    <Input placeholder="Contato Not. Saída" value={viagens.nomeContatoNotificacaoSaida} onChange={(e) => setViagens({ ...viagens, nomeContatoNotificacaoSaida: e.target.value })} type="text" />
                </Row>
                <Row>
                    <Input placeholder="Contato Not. Volta" value={viagens.nomeContatoNotificacaoVolta} onChange={(e) => setViagens({ ...viagens, nomeContatoNotificacaoVolta: e.target.value })} type="text" />
                </Row>
                <Row>
                    <Input placeholder="Observações" value={viagens.observacao} onChange={(e) => setViagens({ ...viagens, observacao: e.target.value })} type="text" />


                </Row>
                <Row>
                    <ReactInputMask
                        mask="99/99/9999"
                        placeholder="Data de Saída (dd-MM-yyyy)"
                        value={viagens.dataSaida}
                        onChange={(e) => handleViagensDateChange(e, 'dataSaida')}
                    >
                        {(inputProps) => <Input {...inputProps} type="text" />}
                    </ReactInputMask>
                </Row>
                <Row>
                    <ReactInputMask
                        mask="99/99/9999"
                        placeholder="Data de Volta (dd-MM-yyyy)"
                        value={viagens.dataVolta}
                        onChange={(e) => handleViagensDateChange(e, 'dataVolta')}
                    >
                        {(inputProps) => <Input {...inputProps} type="text" />}
                    </ReactInputMask>
                </Row>
                <Row>
                    <Input placeholder="Procedimentos" value={viagens.procedimentos} onChange={(e) => setViagens({ ...viagens, procedimentos: e.target.value })}></Input>
                </Row>
            </Form>
            <Buttons>
                <div className="divButton">
                    <button id="btnCancelar" className="btn btn-danger" onClick={() => setShowModal(false)}>Cancelar</button>
                </div>
                <div className="divButton">
                    <button id="btnAdicionar" className="btn btn-success" onClick={handleSave}>Adicionar</button>
                </div>
            </Buttons>
        </>
    );
}

ModalViagem.propTypes = {
    viagens: PropTypes.shape({
        nomeContatoNotificacaoSaida: PropTypes.string.isRequired,
        nomeContatoNotificacaoVolta: PropTypes.string.isRequired,
        observacao: PropTypes.string,
        dataSaida: PropTypes.string.isRequired,
        dataVolta: PropTypes.string.isRequired,
        procedimentos: PropTypes.string,
    }).isRequired,
    setShowModal: PropTypes.func.isRequired,
    setViagens: PropTypes.func.isRequired,
    handleViagensDateChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
};

export default ModalViagem;
