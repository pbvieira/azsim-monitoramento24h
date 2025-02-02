/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CardInformacoes from "../../../../components/Formularios/Card"
import { Input, Row } from "../../../../components/Formularios/Form"
import { parsePhoneNumberFromString } from "libphonenumber-js";


function ContatosForm({ dadosBasicos, handleOpenModal, deleteItem }) {

    function formatPhoneNumber(phone) {
        if (!phone) return "";
        const phoneNumber = parsePhoneNumberFromString(phone, "BR");
        return phoneNumber ? phoneNumber.formatNational() : phone;
    }

    return (
        <>
            <Row>
                <h4>Contatos</h4>
            </Row>
            {dadosBasicos.contatos.length > 0 ? (
                dadosBasicos.contatos.map((contato, index) => (
                    <Row key={index}>
                        <CardInformacoes
                            index={index}
                            title1={"Nome"}
                            text1={contato.nome ? contato.nome : ""}
                            title2={"Tel"}
                            text2={formatPhoneNumber(contato.telefone) || ""}
                            handleOpenModal={handleOpenModal}
                            deleteItem={deleteItem}
                            item={'contatos'}
                            typeDataDelete={'esse contato'}
                        />
                    </Row>
                ))
            ) : (
                <Row>
                    <p>Nenhum contato registrado.</p>
                </Row>
            )}
        </>
    );
}

export default ContatosForm
