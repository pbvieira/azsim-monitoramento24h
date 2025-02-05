/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CardInformacoes from "../../../../components/Formularios/Card"
import { Input, Row } from "../../../../components/Formularios/Form"
import { formatDateForInput } from "../fragments/modal/utils/FormateDates";

function ViagensForm({ dadosBasicos, handleOpenModal, deleteItem }) {

    return (
        <>
            <Row>
                <h4>Viagens</h4>
            </Row>

            {dadosBasicos.viagens.length > 0 ? (
                dadosBasicos.viagens.map((viagem, index) => (
                    <Row key={index}>
                        <CardInformacoes
                            index={index}
                            key={index}
                            title1={"Data de Saída"}
                            text1={viagem.dataSaida ? formatDateForInput(viagem.dataSaida) : ""}
                            title2={"Data de Volta"}
                            text2={viagem.dataVolta ? formatDateForInput(viagem.dataVolta) : ""}
                            handleOpenModal={handleOpenModal}
                            deleteItem={deleteItem}
                            item={'viagens'}
                            typeDataDelete={'essa viagem'}
                        />
                    </Row>
                ))
            ) : (
                <Row>
                    <p>Nenhuma viagem registrada.</p>
                </Row>
            )}
        </>
    )
}

export default ViagensForm