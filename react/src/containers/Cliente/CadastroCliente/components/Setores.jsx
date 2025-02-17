/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CardInformacoes from "../../../../components/Formularios/Card"
import { Input, Row } from "../../../../components/Formularios/Form"

function SetoresForm({ dadosBasicos, handleOpenModal, deleteItem }) {

    return (
        <>
            <Row>
                <h4>Setores</h4>
            </Row>

            {dadosBasicos.setores.length > 0 ? (
                dadosBasicos.setores.map((setor, index) => (
                    <Row key={index}>
                        <CardInformacoes
                            index={index}
                            key={index}
                            title1={"Setor"}
                            text1={setor.setor ? String(setor.setor).trim() : ""}
                            title2={"Local Instalação"}
                            text2={setor.localizacao ? String(setor.localizacao).trim() : ""}
                            handleOpenModal={handleOpenModal}
                            deleteItem={deleteItem}
                            item={'setores'}
                            typeDataDelete={'esse setor'}
                        />

                    </Row>
                ))
            ) : (
                <Row>
                    <p>Nenhum setor registrado.</p>
                </Row>
            )}

        </>
    )
}

export default SetoresForm

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