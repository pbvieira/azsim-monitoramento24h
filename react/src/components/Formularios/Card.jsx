/* eslint-disable react/prop-types */
import { Card } from "./Form.js"

function CardInformacoes({ index, title1, text1, title2, text2, handleOpenModal, deleteItem, item }) {
    return (
        <Card >
            <div className="div">
                <div className="informations" id="">
                    <h6>{title1}: {text1} </h6>
                    <h6>{title2}: {text2} </h6>
                </div>

                <div className="actions">
                    <button className="btn btnOptions" onClick={() => { handleOpenModal(index) }}>Ver mais</button>
                    <button className="btn btnExcluir" onClick={() => { deleteItem(item, index) }}>Deletar</button>
                </div>
            </div>
        </Card>
    )
}
export default CardInformacoes