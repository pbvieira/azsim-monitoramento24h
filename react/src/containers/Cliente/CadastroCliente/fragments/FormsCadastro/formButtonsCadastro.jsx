import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Buttons } from '../../styles';
import PropTypes from 'prop-types';

function FormButtons({ handleSubmit, onSubmit, onSubmitAndReload, handleOpenModal, tabSelected }) {
    return (
        <Buttons>
            <Button onClick={handleSubmit(onSubmit)} type="submit" className="btn btn-success me-3">
                Salvar
            </Button>

            <Button id="bntNovoCliente" onClick={handleSubmit(onSubmitAndReload)} type="button" className="btn btn-success">
                <i className="bi bi-person-fill-add" /> Salvar e Adicionar Novo
            </Button>

            <Link className="ms-3 btn btn-danger" to="/azsim/consultaCliente">
                Cancelar
            </Link>

            {tabSelected !== '' && (
                <button id='buttonNovoItem' className='btn ms-3 btn-success' onClick={() => handleOpenModal()}>Adicionar {tabSelected}</button>
            )}
        </Buttons>
    );
}

FormButtons.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSubmitAndReload: PropTypes.func.isRequired,
    tabSelected: PropTypes.string.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
};

export default FormButtons;

