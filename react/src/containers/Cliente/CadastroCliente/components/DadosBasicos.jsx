/* eslint-disable react/prop-types */
import ReactInputMask from "react-input-mask";
import { Input, Row } from "../../../../components/Formularios/Form";

export function DadosBasicosForm({ dadosBasicos, register, setDadosBasicos, errors, natureza, handleChangeNatureza }) {
    return (
        <>
            <Row>
                <h4>Dados Básicos</h4>
            </Row>

            <Row>
                <div className="inputComLabel">
                    <label htmlFor="unidade">Unidade</label>
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
                </div>

                <div className="inputComLabel">
                    <label htmlFor="habil" >Hábil</label>
                    <Input
                        id="habil"
                        type="text"
                        placeholder="Hábil"
                        name="codHabil"
                        className='form-control'
                        {...register("codHabil", { required: false })}
                        value={dadosBasicos.codHabil || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, codHabil: e.target.value })}
                    />
                </div>

                <div className="inputComLabel">
                    <label htmlFor="condor">Condor</label>
                    <Input
                        className='form-control'
                        type="text"
                        id="condor"
                        placeholder="Condor"
                        name="codCondor"
                        {...register("codCondor", { required: false })}
                        value={dadosBasicos.codCondor || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, codCondor: e.target.value })}
                    />
                </div>

                <div className="inputComLabel">
                    <label htmlFor="codificador">Codificador</label>
                    <Input
                        className='form-control'
                        type="text"
                        id="codificador"
                        placeholder="Codificador"
                        name="codificador"
                        {...register("codificador", { required: false })}
                        value={dadosBasicos.codificador || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, codificador: e.target.value })}
                    />
                </div>
            </Row>

            <Row>

                <div className="inputComLabel">
                    <label htmlFor="natureza">Natureza</label>
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
                </div>

                <div className="inputComLabel">
                    <label htmlFor="documento">Documento</label>
                    <ReactInputMask
                        mask={natureza === "FISICA" ? "999.999.999-99" : "99.999.999/9999-99"}
                        maskChar=""
                        id="documento"
                        name="documento"
                        {...register("documento", { required: true })}
                        className={`form-control ${errors.documento ? 'is-invalid' : ''}`}
                        placeholder={natureza === "FISICA" ? "CPF" : "CNPJ"}
                        value={dadosBasicos.documento || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, documento: e.target.value })}
                    />
                </div>

                <div className="inputComLabel">
                    <label htmlFor="inscMunicipal">Inscrição Municipal</label>
                    <Input
                        id="inscMunicipal"
                        className='form-control'
                        type="text"
                        placeholder="Inscrição Municipal"
                        name="inscMunicipal"
                        {...register("inscMunicipal", { required: false })}
                        value={dadosBasicos.inscMunicipal || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, inscMunicipal: e.target.value })}
                    />
                </div>
            </Row>

            <Row>

                <div className="inputComLabel">
                    <label htmlFor="nome">Nome</label>
                    <Input
                        type="text"
                        placeholder="Nome/Razão Social"
                        name="nome"
                        id="nome"
                        {...register("nome", { required: true })}
                        value={dadosBasicos.nome || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, nome: e.target.value })}
                        className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                    />
                </div>

                <div className="inputComLabel">
                    <label htmlFor="nomeFantasia">Nome Fantasia</label>
                    <Input
                        className='form-control'

                        type="text"
                        placeholder="Nome Fantasia"
                        name="nomeFantasia"
                        {...register("nomeFantasia", { required: false })}
                        value={dadosBasicos.nomeFantasia || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, nomeFantasia: e.target.value })}
                    />
                </div>
            </Row>

            <Row>

                <div className="inputComLabel">
                    <label htmlFor="endereco">Endereço</label>
                    <Input
                        className='form-control'
                        type="text"
                        id="endereco"
                        placeholder="Endereço"
                        name="endereco"
                        {...register("endereco", { required: false })}
                        value={dadosBasicos.endereco || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, endereco: e.target.value })}
                    />
                </div>

                <div className="inputComLabel">
                    <label htmlFor="bairro">Bairro</label>
                    <Input
                        className='form-control'
                        type="text"
                        id="bairro"
                        placeholder="Bairro"
                        name="bairro"
                        {...register("bairro", { required: false })}
                        value={dadosBasicos.bairro || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, bairro: e.target.value })}
                    />
                </div>
            </Row>

            <Row>

                <div className="inputComLabel">
                    <label htmlFor="cidade">Cidade</label>
                    <Input
                        className='form-control'
                        type="text"
                        id="cidade"
                        placeholder="Cidade"
                        name="cidade"
                        {...register("cidade", { required: false })}
                        value={dadosBasicos.cidade || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, cidade: e.target.value })}
                    />
                </div>

                <div className="inputComLabel">
                    <label htmlFor="uf">UF</label>
                    <select
                        value={dadosBasicos.uf || ""}
                        name="uf"
                        id="uf"
                        {...register("uf", { required: false })}
                        className="form-select"
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, uf: e.target.value })}
                    >
                        <option value="RS">RS</option>
                        <option value="SC">SC</option>
                        <option value="PR">PR</option>
                    </select>
                </div>

                <div className="inputComLabel">
                    <label htmlFor="cep">CEP</label>
                    <ReactInputMask
                        mask="99999-999"
                        maskChar=""
                        id="cep"
                        name="cep"
                        {...register("cep", { required: false })}
                        value={dadosBasicos.cep || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, cep: e.target.value })}
                        placeholder="CEP"
                        className="form-control"
                    />
                </div>
            </Row>

            <Row>
                <div className="inputComLabel">
                    <label htmlFor="procedimentos">Procedimentos</label>
                    <textarea
                        {...register("procedimento", { required: false })}
                        value={dadosBasicos.procedimento || ""}
                        onChange={(e) => setDadosBasicos({ ...dadosBasicos, procedimento: e.target.value })}
                        placeholder="Procedimentos"
                        id="procedimentos"
                        rows={5}
                        className="form-control"
                    />
                </div>
            </Row>
        </>
    )
}
