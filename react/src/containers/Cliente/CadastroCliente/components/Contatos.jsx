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

    const groupedContatos = [];
    for (let i = 0; i < dadosBasicos.contatos.length; i += 3) {
        groupedContatos.push(dadosBasicos.contatos.slice(i, i + 3));
    }

    return (
        <>
            <Row>
                <h4>Contatos </h4>
            </Row>
            {groupedContatos.length > 0 ? (
                groupedContatos.map((group, groupIndex) => (
                    <Row key={groupIndex}>
                        {group.map((contato, index) => (
                            <CardInformacoes
                                index={index}
                                key={index}
                                title1={"Nome"}
                                text1={contato.nome ? contato.nome : ""}
                                title2={"Tel"}
                                text2={formatPhoneNumber(contato.telefone) || ""}
                                title3={"Senha"}
                                text3={contato.senha ? contato.senha : ""}
                                title4={"Contra Senha"}
                                text4={contato.contraSenha ? contato.contraSenha : ""}
                                title5={"Observações"}
                                text5={contato.observacao ? contato.observacao : ""}
                                handleOpenModal={handleOpenModal}
                                deleteItem={deleteItem}
                                item={'contatos'}
                            />
                        ))}
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

{/* <Input
                    name={`nome${index}`}
                    {...register(`nome${index}`, { required: false })}
                    type="text"
                    className="form-control"
                    disabled
                    placeholder='Nome'
                    id={`nome${index}`}
                    value={contato.nome || ''}
                    title={contato.nome || ''}

                />


                <Input
                    {...register(`senha${index}`, { required: false })}
                    type="text"
                    className="form-control"
                    id={`senha${index}`}
                    disabled
                    placeholder='Senha'
                    value={contato.senha}
                    title={contato.senha || ''}

                />


                <Input
                    {...register(`contraSenha${index}`, { required: false })}
                    type="text"
                    className="form-control"
                    id={`contraSenha${index}`}
                    disabled
                    placeholder='Contra-senha'
                    value={contato.contraSenha}
                    title={contato.contraSenha || ''}

                />


                <Input
                    mask="(99) 99999-9999"
                    maskChar=""
                    name={`telefone${index}`}
                    {...register(`telefone${index}`, { required: false })}
                    type="text"
                    disabled
                    placeholder='Telefone'
                    className="form-control"
                    id={`telefone${index}`}
                    value={contato.telefone}
                    title={contato.telefone || ''}

                />


                <Input
                    {...register(`dataNascimento${index}`, { required: false })}
                    type="date"
                    disabled
                    placeholder='Data de Nascimento'
                    className="form-control"
                    id={`dataNascimento${index}`}
                    value={contato.dataNascimento ? contato.dataNascimento : ''}
                    title={contato.dataNascimento || ''}
                /> */}