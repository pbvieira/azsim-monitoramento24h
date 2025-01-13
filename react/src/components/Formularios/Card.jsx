/* eslint-disable react/prop-types */
import { Card } from "./Form"

function CardInformacoes({ index, title1, text1, title2, text2, handleOpenModal, deleteItem, ItemParaDelete }) {
    return (
        <Card>
            <div><h6>{title1}: {text1} </h6> <button className="btn btnExluir" onClick={() => deleteItem(ItemParaDelete, index)}><span className="material-symbols-outlined">
                delete
            </span></button></div>
            <div><h6>{title2}: {text2}</h6><button onClick={() => handleOpenModal(index)} className="btn btn-primary">Ver Mais </button></div>
        </Card >
    )
}
export default CardInformacoes