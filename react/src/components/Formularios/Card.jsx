/* eslint-disable react/prop-types */
import { useState } from "react"
import { Card, DropdownContent, DropdownItem, Options } from "./Form.js"

function CardInformacoes({ index, title1, text1, title2, text2, title3, text3, title4, text4, title5, text5, handleOpenModal, deleteItem, item }) {

    const [booleanDropdown, setBooleanDropdown] = useState(false);

    return (
        <Card>
            <div className="div">
                <div className="div" id="">
                    <h6>{title1}: {text1} </h6>
                    <Options>
                        <button className="btn btnOptions" onClick={() => setBooleanDropdown(!booleanDropdown)}> <span className="material-symbols-outlined">
                            more_vert
                        </span></button>
                        <DropdownContent show={booleanDropdown}>
                            <DropdownItem excluir={true} className="btn" onClick={() => { deleteItem(item, index), setBooleanDropdown(!booleanDropdown) }}>Deletar</DropdownItem>
                            <DropdownItem className="btn" onClick={() => { handleOpenModal(index), setBooleanDropdown(!booleanDropdown) }}>Ver mais</DropdownItem>
                        </DropdownContent>
                    </Options>
                </div>
            </div>

            <div className="div"><h6>{title2}: {text2}</h6></div>

            {title3 && (
                <div className="div">
                    <h6>{title3}: {text3}</h6>
                </div>
            )}

            {title4 && (
                <div className="div">
                    <h6>{title4}: {text4}</h6>
                </div>
            )}

            {title5 && (
                <div className="div">
                    <h6>{title5}: {text5}</h6>
                </div>
            )}
        </Card>
    )
}
export default CardInformacoes