/* eslint-disable react/prop-types */
import { useState } from "react"
import { Card, DropdownContent, DropdownItem, Options } from "./Form.js"

function CardInformacoes({ index, title1, text1, title2, text2, handleOpenModal, deleteItem, item }) {

    const [booleanDropdown, setBooleanDropdown] = useState(false);

    return (
        <Card>
            <div>
                <div>
                    <h6>{title1}: {text1} </h6>
                </div>
                <Options>
                    <button className="btn btnOptions" onClick={() => setBooleanDropdown(!booleanDropdown)}> <span className="material-symbols-outlined">
                        more_vert
                    </span></button>
                    <DropdownContent show={booleanDropdown}>
                        <DropdownItem className="btn" onClick={() => { deleteItem(item, index), setBooleanDropdown(!booleanDropdown) }}>Deletar</DropdownItem>
                        <DropdownItem className="btn" onClick={() => { handleOpenModal(index), setBooleanDropdown(!booleanDropdown) }}>Ver mais</DropdownItem>
                    </DropdownContent>
                </Options>
            </div>

            <div><h6>{title2}: {text2}</h6></div>
        </Card>
    )
}
export default CardInformacoes