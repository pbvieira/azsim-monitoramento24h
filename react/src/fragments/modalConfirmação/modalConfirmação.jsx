/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

import { Background, Buttons, Container, Title } from "./style";

function ModalConfirmação({ funcDelete, item, index, setShowModalConfirmacao, message }) {
    return (
        <Background>
            <Container>
                <Title>
                    <h5>Deseja mesmo {message}?</h5>
                </Title>
                <Buttons>
                    <button
                        onClick={() => { funcDelete(item, index), setShowModalConfirmacao(false) }}
                        data-bs-dismiss="modal"
                        className="btn btn-success"
                    >
                        SIM
                    </button>
                    <button
                        onClick={() => setShowModalConfirmacao(false)}
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



export default ModalConfirmação;
