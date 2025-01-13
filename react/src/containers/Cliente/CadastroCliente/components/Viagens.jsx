/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CardInformacoes from "../../../../components/Formularios/Card"
import { Input, Row } from "../../../../components/Formularios/Form"
import { formatDateForInput } from "../fragments/modal/utils/FormateDates";

function ViagensForm({ dadosBasicos, handleOpenModal, deleteItem }) {

    const groupedViagens = [];
    for (let i = 0; i < dadosBasicos.viagens.length; i += 3) {
        groupedViagens.push(dadosBasicos.viagens.slice(i, i + 3));
    }
    return (
        <>
            <Row>
                <h4>Viagens</h4>
            </Row>

            {groupedViagens.length > 0 ? (
                groupedViagens.map((group, groupIndex) => (
                    <Row key={groupIndex}>
                        {group.map((viagem, index) => (
                            <CardInformacoes
                                index={index}
                                key={index}
                                title1={"Data de Saída"}
                                text1={viagem.dataSaida ? formatDateForInput(viagem.dataSaida) : ""}
                                title2={"Data de Volta"}
                                text2={viagem.dataVolta ? formatDateForInput(viagem.dataVolta) : ""}
                                handleOpenModal={handleOpenModal}
                                deleteItem={deleteItem}
                                ItemParaDelete={'viagens'}
                            />
                        ))}
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