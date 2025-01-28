import PropTypes from "prop-types";
import { Background, Buttons, Container, Title } from "./style";
import useModalLogic from "./hooks/useLogicaModal";

function Modal({ setAberta, setShowModal, handleSubmit, onSubmit, dataOcorrencia }) {
    const { handleConfirm } = useModalLogic(setAberta, setShowModal, handleSubmit, onSubmit, dataOcorrencia);

    return (
        <Background>
            <Container>
                <Title>
                    <h5>Deseja encerrar a ocorrência?</h5>
                </Title>
                <Buttons>
                    <button
                        onClick={() => handleConfirm("false")}
                        data-bs-dismiss="modal"
                        className="btn btn-success"
                    >
                        SIM
                    </button>
                    <button
                        onClick={() => handleConfirm("true")}
                        data-bs-dismiss="modal"
                        className="btn btn-danger"
                    >
                        NÃO
                    </button>
                </Buttons>
            </Container>
        </Background>
    );
}

Modal.propTypes = {
    setAberta: PropTypes.func.isRequired,
    setShowModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    dataOcorrencia: PropTypes.object.isRequired,
};

export default Modal;
