/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Buttons, Form, Input, Row, Title } from '../style';
import ReactInputMask from 'react-input-mask';

function ModalContato({ contato, setContato, handleDateChange, handleSave, setShowModal, index }) {

    console.log(contato)

    return (
        <>
            <Title><h5>{index !== null ? 'Editar Contato' : 'Adicionar Novo Contato'}</h5></Title>
            <div className="divButton">
                <button id="btnFechar" className="btn " onClick={() => setShowModal(false)}>X</button>
            </div>
            <Form>
                <Row>
                    <Input placeholder="Nome" value={contato.nome} onChange={(e) => setContato({ ...contato, nome: e.target.value })} type="text" />
                </Row>
                <Row>
                    <Input placeholder="Senha" value={contato.senha} onChange={(e) => setContato({ ...contato, senha: e.target.value })} type="text" />
                </Row>
                <Row>
                    <Input placeholder="Contra-senha" value={contato.contraSenha} onChange={(e) => setContato({ ...contato, contraSenha: e.target.value })} type="text" />
                </Row>
                <Row>
                    <ReactInputMask
                        mask="(99) 99999-9999"
                        placeholder="Telefone"
                        value={contato.telefone || ''}
                        onChange={(e) => setContato({ ...contato, telefone: e.target.value })}                    >
                        {(inputProps) => <Input {...inputProps}
                            type="text" />}
                    </ReactInputMask>                </Row>
                <Row>
                    <ReactInputMask
                        mask="99/99/9999"
                        placeholder="Data de Nascimento (dd/MM/yyyy)"
                        value={contato.dataNascimento || ''}
                        onChange={handleDateChange}
                    >
                        {(inputProps) => <Input {...inputProps}
                            type="text" />}
                    </ReactInputMask>
                </Row>
                <Row>
                    <Input placeholder="Observações" value={contato.observacao} onChange={(e) => setContato({ ...contato, observacao: e.target.value })}></Input>
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

ModalContato.propTypes = {
    contato: PropTypes.shape({
        nome: PropTypes.string,
        telefone: PropTypes.string,
        senha: PropTypes.string,
        contraSenha: PropTypes.string,
        dataNascimento: PropTypes.string,
        observacao: PropTypes.string,
    }).isRequired,
    setContato: PropTypes.func.isRequired,
    handleDateChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    setShowModal: PropTypes.func.isRequired,
};

export default ModalContato;
