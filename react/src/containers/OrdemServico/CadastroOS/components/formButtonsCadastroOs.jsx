import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Buttons } from '../style';

function FormButtons() {
    return (
        <Buttons>
            <Button type="submit" className="btn btn-success me-3">
                Salvar
            </Button>
            <Link id="bntNovaOS" type="button" className="btn btn-success">
                <i className="bi bi-person-fill-add" /> Adicionar Nova OS
            </Link>
            <Link className="ms-3 btn btn-danger" to="/consultaOS">
                Cancelar
            </Link>
        </Buttons>
    );
}

FormButtons.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleNovaOS: PropTypes.func.isRequired,
    tabSelected: PropTypes.string.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
};

export default FormButtons;
