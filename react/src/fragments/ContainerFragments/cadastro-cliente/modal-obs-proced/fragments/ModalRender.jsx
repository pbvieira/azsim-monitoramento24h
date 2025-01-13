/* eslint-disable react/prop-types */
import { Container, Content, ConteudoObs, Title } from "../modal/style";


function ModalRenderObservacoes({ setShowModal, observacao }) {
    return (
        <>
            <Container>
                <Content>
                    <button id="btnFechar" onClick={() => setShowModal(false)}>X</button>
                    <Title><h5>Observações:</h5></Title>
                    <ConteudoObs>
                        {observacao}
                    </ConteudoObs>
                </Content>
            </Container>
        </>
    )
}

export default ModalRenderObservacoes
