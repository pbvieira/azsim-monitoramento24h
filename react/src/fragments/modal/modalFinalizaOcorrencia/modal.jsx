import PropTypes from "prop-types";
import { Background, Buttons, Container, Title } from "./style"


function Modal({ setEncerra, setShowModal, handleSubmit, onSubmit, dataOcorrencia }) {

    const EncerraBoolean = (boolean) => {
        return new Promise((resolve) => {
            if (boolean === 'true') {
                setEncerra(true);
                resolve(true);
            } else {
                setEncerra(false);
                resolve(false);
            }
            setShowModal(false);
        });
    };

    const handleConfirm = (boolean) => {
        EncerraBoolean(boolean).then((result) => {
            handleSubmit((formData) => onSubmit(formData, dataOcorrencia.id, result))();
        });
    };


    return (

        <Background>
            <Container>
                <Title><h5>Deseja encerrar a ocorrência?</h5></Title>
                <Buttons>
                    <button onClick={() => handleConfirm('true')} data-bs-dismiss="modal" className="btn btn-success">SIM</button>
                    <button onClick={() => handleConfirm('false')} data-bs-dismiss="modal" className="btn btn-danger">NÃO</button>
                </Buttons>
            </Container>

        </Background>
    );
}

Modal.propTypes = {
    setEncerra: PropTypes.boolean,
    setShowModal: PropTypes.boolean,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    dataOcorrencia: PropTypes.object
}


export default Modal