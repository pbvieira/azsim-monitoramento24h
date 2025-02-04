/* eslint-disable react/prop-types */
import { useState } from "react"
import { Card } from "./Form.js"
import ModalConfirmação from "../../fragments/modalConfirmação/modalConfirmação.jsx"

function CardInformacoes({ index, title1, text1, title2, text2, handleOpenModal, deleteItem, item, typeDataDelete }) {
    const [showModalConfirmacao, setShowModalConfirmacao] = useState(false)
    return (
        <>
            {showModalConfirmacao && <ModalConfirmação message={`excluir ${typeDataDelete}`} funcDelete={deleteItem} item={item} index={index} setShowModalConfirmacao={setShowModalConfirmacao} />}
            <Card >
                <div className="div">
                    <div className="informations" id="">
                        <h6>{title1}: {text1} </h6>
                        <h6>{title2}: {text2} </h6>
                    </div>

                    <div className="actions">
                        <button className="btn btnOptions" onClick={() => { handleOpenModal(index) }}>Editar</button>
                        <button className="btn btnExcluir" onClick={() => { setShowModalConfirmacao(true) }}>Deletar</button>
                    </div>
                </div>
            </Card>
        </>

    )
}
export default CardInformacoes