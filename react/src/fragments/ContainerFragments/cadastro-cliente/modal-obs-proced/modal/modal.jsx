
import ModalRenderObservacoes from "../fragments/ModalRender";
import ModalRenderViagens from "../fragments/ModalRenderViagens";
import { Background, Container } from "./style"
import PropTypes from "prop-types";

export function ModalObs({ setShowModal, contato, setor }) {
    const observacao = contato?.observacao || setor?.observacao || "Sem observações";

    return (
        <Background>
            <ModalRenderObservacoes observacao={observacao} setShowModal={setShowModal} />
        </Background>
    );
}

ModalObs.propTypes = {
    setShowModal: PropTypes.func.isRequired,
    contato: PropTypes.shape({
        observacao: PropTypes.string
    }),
    setor: PropTypes.shape({
        observacao: PropTypes.string,
    })
};
export function ModalProcedimentos({ setShowModal, viagem }) {
    return (
        <Background>
            <Container procedimento={true}>
                <ModalRenderViagens setShowModal={setShowModal} viagem={viagem} />
            </Container>
        </Background>
    );
}

ModalProcedimentos.propTypes = {
    setShowModal: PropTypes.func.isRequired,
    viagem: PropTypes.shape({
        observacao: PropTypes.string,
        procedimentos: PropTypes.string,
    }).isRequired
};

