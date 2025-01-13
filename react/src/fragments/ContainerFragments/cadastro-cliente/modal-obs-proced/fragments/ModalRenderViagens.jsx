/* eslint-disable react/prop-types */
import { Content, ConteudoObs } from "../modal/style";

function ModalRenderViagens({ setShowModal, viagem }) {
    return (
        <>
            <Content>
                <button id="btnFechar" onClick={() => setShowModal(false)}>X</button>
                <h5>Observações:</h5>
                <ConteudoObs>
                    {viagem.observacao ? viagem.observacao : 'Sem Observações'}
                </ConteudoObs>
            </Content>
            <Content>
                <button id="btnFechar" onClick={() => setShowModal(false)}>X</button>
                <h5>Procedimentos:</h5>
                <ConteudoObs>
                    {viagem.procedimentos ? viagem.procedimentos : 'Sem Procedimentos'}
                </ConteudoObs>
            </Content>
        </>
    )
}

export default ModalRenderViagens