/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Buttons, Form, Input, Row, Title } from '../style';

function ModalSetor({ setor, setShowModal, setSetor, handleSave }) {
    return (
        <>
            <Title><h5>{setor.index !== null ? 'Editar Setor' : 'Adicionar Novo Setor'}</h5></Title>
            <div className="divButton">
                <button id="btnFechar" className="btn " onClick={() => setShowModal(false)}>X</button>
            </div>
            <Form>
                <Row>
                    <Input placeholder="Setor" value={setor.setor} onChange={(e) => setSetor({ ...setor, setor: e.target.value })} type="text" />
                </Row>
                <Row>
                    <Input placeholder="Localização" value={setor.localizacao} onChange={(e) => setSetor({ ...setor, localizacao: e.target.value })} type="text" />
                </Row>
                <Row>
                    <Input placeholder="Observações" value={setor.observacao} onChange={(e) => setSetor({ ...setor, observacao: e.target.value })}></Input>
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

ModalSetor.propTypes = {
    setor: PropTypes.shape({
        setor: PropTypes.string.isRequired,
        localizacao: PropTypes.string.isRequired,
        observacao: PropTypes.string,
    }).isRequired,
    setShowModal: PropTypes.func.isRequired,
    setSetor: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
};

export default ModalSetor;
