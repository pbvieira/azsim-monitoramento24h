import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Buttons } from '../../styles';
import PropTypes from 'prop-types';

function FormButtons({ handleSubmit, onSubmit, handleNovoCliente, handleOpenModal, tabSelected }) {
	
	console.log("TAB:" + tabSelected);
	
    return (
        <Buttons>
            <Button id="btnCadastro" onClick={() => handleSubmit(onSubmit)} type="submit" className="btn btn-primary me-3">
                Salvar
            </Button>
			
            <Link id="bntNovoCliente" onClick={handleNovoCliente} type="button" className="btn btn-success">
                <i className="bi bi-person-fill-add" /> Salvar e Adicionar Novo
            </Link>
			
            <Link className="ms-3 btn btn-danger" to="/consultaCliente">
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
    handleNovoCliente: PropTypes.func.isRequired,
    tabSelected: PropTypes.string.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
};

export default FormButtons;
