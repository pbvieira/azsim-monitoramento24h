/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Buttons, Form, Input, Row, Title } from '../style';
import ReactInputMask from 'react-input-mask';

function ModalContato({ contato, setContato, handleDateChange, handleSave, setShowModal, index }) {

    return (
        <>
            <Title><h5>{index !== null ? 'Editar Contato' : 'Adicionar Novo Contato'}</h5></Title>
            <div className="divButton">
                <button id="btnFechar" className="btn " onClick={() => setShowModal(false)}>X</button>
            </div>
            <Form>
                <Row>
                    <div className="inputComLabel" style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <label htmlFor="nome">Nome</label>
                        <Input placeholder="Nome" name='nome' value={contato.nome} onChange={(e) => setContato({ ...contato, nome: e.target.value })} type="text" />
                    </div>
                </Row>
                <Row>
                    <div className="inputComLabel" style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <label htmlFor="senha">Senha</label>
                        <Input placeholder="Senha" name='senha' value={contato.senha} onChange={(e) => setContato({ ...contato, senha: e.target.value })} type="text" />
                    </div>
                </Row>
                <Row>
                    <div className="inputComLabel" style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <label htmlFor="contraSenha">Contra-senha</label>
                        <Input placeholder="Contra-senha" name='contraSenha' value={contato.contraSenha} onChange={(e) => setContato({ ...contato, contraSenha: e.target.value })} type="text" />
                    </div>
                </Row>
                <Row>
                    <div className="inputComLabel" style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <label htmlFor="telefone">Telefone</label>
                        <ReactInputMask
                            mask="(99) 99999-9999"
                            placeholder="Telefone"
                            name='telefone'
                            value={contato.telefone || ''}
                            onChange={(e) => setContato({ ...contato, telefone: e.target.value })}                    >
                            {(inputProps) => <Input {...inputProps}
                                type="text" />}
                        </ReactInputMask>
                    </div>
                </Row>
                <Row>
                    <div className="inputComLabel" style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <label htmlFor="dataNascimento">Data de Nascimento (dd/MM/yyyy)</label>
                        <ReactInputMask
                            mask="99/99/9999"
                            name='dataNascimento'
                            placeholder="Data de Nascimento (dd/MM/yyyy)"
                            value={contato.dataNascimento || ''}
                            onChange={handleDateChange}
                        >
                            {(inputProps) => <Input {...inputProps}
                                type="text" />}
                        </ReactInputMask>
                    </div>

                </Row>
                <Row>
                    <div className="inputComLabel" style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <label htmlFor="observacao">Observações</label>
                        <textarea className='textAreaModal' placeholder="Observações" name='observacao' value={contato.observacao} onChange={(e) => setContato({ ...contato, observacao: e.target.value })}></textarea>
                    </div>
                </Row>
            </Form>
            <Buttons>
                <div className="divButton">
                    <button id="btnAdicionar" className="btn btn-secondary" onClick={handleSave}>Adicionar</button>
                </div>
                <div className="divButton">
                    <button id="btnCancelar" className="btn btn-danger" onClick={() => setShowModal(false)}>Cancelar</button>
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
