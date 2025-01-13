/* eslint-disable react/prop-types */
import ReactInputMask from "react-input-mask";
import { Input, Row } from "../../../../components/Formularios/Form";
import ErrorCard from "../../../../fragments/ErrorCard/ErrorCard";

export function DadosBasicosForm({ dadosBasicos, register, setDadosBasicos, errors, natureza, handleChangeNatureza }) {
    return (
        <>
            <Row>
                <h4>Dados Básicos</h4>
            </Row>

            <Row>
                <select
                    value={dadosBasicos.unidade || ""}
                    name="unidade"
                    {...register("unidade", { required: false })}
                    id="unidade"
                    className={`form-select ${errors.unidade ? 'is-invalid' : ''}`}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, unidade: e.target.value })}
                >
                    <option value="Montenegro">Montenegro</option>
                    <option value="Porto Alegre">Porto Alegre</option>
                </select>
                {errors.unidade && <ErrorCard message="O campo unidade deve ser preenchido." />}

                <Input
                    type="text"
                    placeholder="Hábil"
                    name="codHabil"
                    className='form-control'
                    {...register("codHabil", { required: false })}
                    value={dadosBasicos.codHabil || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, codHabil: e.target.value })}
                />

                <Input
                    className='form-control'

                    type="text"
                    placeholder="Condor"
                    name="codCondor"
                    {...register("codCondor", { required: false })}
                    value={dadosBasicos.codCondor || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, codCondor: e.target.value })}
                />

                <Input
                    className='form-control'

                    type="text"
                    placeholder="Codificador"
                    name="codificador"
                    {...register("codificador", { required: false })}
                    value={dadosBasicos.codificador || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, codificador: e.target.value })}
                />
                {errors.codificador && <ErrorCard message="O campo codificador deve ser preenchido." />}
            </Row>

            <Row>

                <select
                    value={natureza}
                    name="natureza"
                    {...register("natureza", { required: true })}
                    id="natureza"
                    className="form-select"
                    onChange={handleChangeNatureza}
                >
                    <option value="FISICA">FISICA</option>
                    <option value="JURIDICA">JURIDICA</option>
                </select>

                <ReactInputMask
                    mask={natureza === "FISICA" ? "999.999.999-99" : "99.999.999/9999-99"}
                    maskChar=""
                    name="documento"
                    {...register("documento", { required: true })}
                    className={`form-control ${errors.documento ? 'is-invalid' : ''}`}
                    placeholder={natureza === "FISICA" ? "CPF" : "CNPJ"}
                    value={dadosBasicos.documento || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, documento: e.target.value })}
                />
                {errors.documento && <ErrorCard message="O campo CPF/CNPJ deve ser preenchido." />}
            </Row>

            <Row>
                <Input
                    className='form-control'
                    type="text"
                    placeholder="Inscrição Municipal"
                    name="inscMunicipal"
                    {...register("inscMunicipal", { required: false })}
                    value={dadosBasicos.inscMunicipal || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, inscMunicipal: e.target.value })}
                />
            </Row>

            <Row>
                <Input
                    type="text"
                    placeholder="Nome/Razão Social"
                    name="nome"
                    {...register("nome", { required: true })}
                    value={dadosBasicos.nome || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, nome: e.target.value })}
                    className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                />
                {errors.nome && <ErrorCard message="O campo Nome/Razão Social deve ser preenchido." />}

                <Input
                    className='form-control'

                    type="text"
                    placeholder="Nome Fantasia"
                    name="nomeFantasia"
                    {...register("nomeFantasia", { required: false })}
                    value={dadosBasicos.nomeFantasia || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, nomeFantasia: e.target.value })}
                />
            </Row>

            <Row>
                <Input
                    className='form-control'

                    type="text"
                    placeholder="Endereço"
                    name="endereco"
                    {...register("endereco", { required: false })}
                    value={dadosBasicos.endereco || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, endereco: e.target.value })}
                />

                <Input
                    className='form-control'

                    type="text"
                    placeholder="Bairro"
                    name="bairro"
                    {...register("bairro", { required: false })}
                    value={dadosBasicos.bairro || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, bairro: e.target.value })}
                />
            </Row>

            <Row>
                <Input
                    className='form-control'

                    type="text"
                    placeholder="Cidade"
                    name="cidade"
                    {...register("cidade", { required: false })}
                    value={dadosBasicos.cidade || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, cidade: e.target.value })}
                />

                <select
                    value={dadosBasicos.uf || ""}
                    name="uf"
                    {...register("uf", { required: false })}
                    className="form-select"
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, uf: e.target.value })}
                >
                    <option value="RS">RS</option>
                    <option value="SC">SC</option>
                    <option value="PR">PR</option>
                </select>

                <ReactInputMask
                    mask="99999-999"
                    maskChar=""
                    name="cep"
                    {...register("cep", { required: false })}
                    value={dadosBasicos.cep || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, cep: e.target.value })}
                    placeholder="CEP"
                    className="form-control"
                />
            </Row>

            <Row>
                <textarea
                    {...register("procedimento", { required: false })}
                    value={dadosBasicos.procedimento || ""}
                    onChange={(e) => setDadosBasicos({ ...dadosBasicos, procedimento: e.target.value })}
                    placeholder="Procedimentos"
                    rows={5}
                    className="form-control"
                />
            </Row>
        </>
    )
}
