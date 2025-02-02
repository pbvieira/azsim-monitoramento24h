/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Formulario } from '../style';

function applyHourMask(value) {
    let formattedValue = value.replace(/\D/g, '');

    if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}:${formattedValue.slice(2, 4)}`;
    }

    return formattedValue;
}

function FormularioOcorrencia({ handleLastFieldBlur, dataOcorrencia, handleSubmit, onSubmit, register, handleSelectTipoOcorrencia, errors, selectedValue, handleSelectDeslocamento, filteredSubCategories }) {


    const AplicaMascara = (event) => {
        event.target.value = applyHourMask(event.target.value);
    };


    return (
        <Formulario>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row ms-1 me-2 mt-2">
                    <div className="col">
                        <label htmlFor="tipoocorrencia" className="form-label">Categoria*</label>
                        <select
                            {...register("tipoocorrencia", { required: false })}
                            id={`tipoocorrencia${dataOcorrencia.id}`}
                            className="form-select"
                            onChange={handleSelectTipoOcorrencia}>
                            <option value="">Selecione uma Categoria</option>
                            <option value="1">ACIONAMENTO TÉCNICO</option>
                            <option value="2">ACIONAMENTO OPERACIONAL</option>
                            <option value="3">ACIONAMENTO SERVIÇO</option>
                            <option value="5">SUPORTE</option>
                            <option value="7">RONDA</option>
                        </select>
                        {errors.categoria && <span className='fieldRequired'>Campo obrigatório</span>}
                    </div>
                    <div className="col">
                        <label htmlFor="subtipoocorrencia" className="form-label">Sub-Categoria*</label>
                        <select
                            {...register("subtipoocorrencia", { required: false })}
                            id="subtipoocorrencia"
                            className="form-select">
                            <option value="">Selecione uma Sub-Categoria</option>
                            {filteredSubCategories[0] != null ? (
                                filteredSubCategories.map((sub) => (
                                    <option key={sub.value} value={sub.value}>
                                        {sub.label}
                                    </option>
                                ))
                            ) : (
                                <option disabled>Sub-categorias indisponíveis</option>
                            )}
                        </select>
                        {errors.subCategoria && <span className='fieldRequired'>Campo obrigatório</span>}
                    </div>

                    <div className="col">
                        <label htmlFor="operador" className="form-label">Operador*</label>
                        <input {...register("operador", { required: false })} type="text" className="form-control" id={`operador${dataOcorrencia.id}`} aria-label=".form-select example" />
                        {errors.operador && <span className='fieldRequired'>Campo obrigatório</span>}
                    </div>
                </div>
                <label htmlFor="deslocamento" className="form-label mt-3 ms-4">Foi necessário deslocamento?</label>
                <div className="d-flex ms-4">
                    <div className="form-check me-3">
                        <input
                            {...register("deslocamento", { required: true })}
                            type="radio"
                            value="sim"
                            id={`deslocamento-sim-${dataOcorrencia.id}`}
                            className="form-check-input"
                            onChange={handleSelectDeslocamento}
                            checked={selectedValue === "sim"}
                        />
                        <label className="form-check-label" htmlFor={`deslocamento-sim-${dataOcorrencia.id}`}>
                            Sim
                        </label>
                    </div>

                    <div className="form-check">
                        <input
                            {...register("deslocamento", { required: true })}
                            type="radio"
                            value="nao"
                            id={`deslocamento-nao-${dataOcorrencia.id}`}
                            className="form-check-input"
                            onChange={handleSelectDeslocamento}
                            checked={selectedValue === "nao"}
                        />
                        <label className="form-check-label" htmlFor={`deslocamento-nao-${dataOcorrencia.id}`}>
                            Não
                        </label>
                    </div>
                </div>
                {selectedValue === 'sim' && (
                    <div>
                        <div className="row ms-2 me-2 mt-1">
                            <div className="col-6">
                                <label htmlFor="ocorrenciapolicialresumo" className="form-label">Ocorrência Policial</label>
                                <textarea
                                    {...register("ocorrenciapolicialresumo")}
                                    className="form-control"
                                    id={`ocorrenciapolicialresumo${dataOcorrencia.id}`}
                                    rows="1"
                                    defaultValue={dataOcorrencia.ocorrenciapolicialresumo || ''}
                                ></textarea>
                                {errors.ocorrenciapolicial && <span className='fieldRequired'>Campo obrigatório</span>}
                            </div>
                            <div className="col-6">
                                <label htmlFor="agente" className="form-label">Agente</label>
                                <input
                                    {...register("agente", { required: false })}
                                    disabled={selectedValue === 'nao'}
                                    id={`agente${dataOcorrencia.id}`}
                                    type="text"
                                    className="form-control"
                                    defaultValue={dataOcorrencia.agente || ''}
                                />
                                {errors.agente && <span className='fieldRequired'>Campo obrigatório</span>}
                            </div>
                        </div>
                        <div>
                            <div className="row ms-2 me-2 mt-2">
                                <div className="col">
                                    <label htmlFor="horasaidaemp" className="form-label">H. Saída Empr.</label>
                                    <input
                                        {...register("horasaidaemp", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="text"
                                        className="form-control"
                                        id={`horasaidaemp${dataOcorrencia.id}`}
                                        onChange={AplicaMascara}
                                    />
                                    {errors.horasaidaemp && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="horachegadacliente" className="form-label">H. Cheg. Local</label>
                                    <input
                                        {...register("horachegadacliente", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="text"
                                        className="form-control"
                                        id={`horachegadacliente${dataOcorrencia.id}`}
                                        onChange={AplicaMascara}
                                    />
                                    {errors.horachegadacliente && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="horasaidacliente" className="form-label">H. Saída Local</label>
                                    <input
                                        {...register("horasaidacliente", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="text"
                                        className="form-control"
                                        id={`horasaidacliente${dataOcorrencia.id}`}
                                        onChange={AplicaMascara}
                                    />
                                    {errors.horasaidacliente && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="horachegadaemp" className="form-label">H. Cheg. Empr.</label>
                                    <input
                                        {...register("horachegadaemp", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="text"
                                        className="form-control"
                                        id={`horachegadaemp${dataOcorrencia.id}`}
                                        onChange={AplicaMascara}
                                    />
                                    {errors.horachegadaemp && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                            </div>
                            <div className="row ms-2 me-2 mt-2">
                                <div className="col">
                                    <label htmlFor="horaaberturalacre" className="form-label">H. Abertura Lacre</label>
                                    <input
                                        {...register("horaaberturalacre", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="text"
                                        className="form-control"
                                        id={`horaaberturalacre${dataOcorrencia.id}`}
                                        onChange={AplicaMascara}
                                    />
                                    {errors.horaaberturalacre && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="horalacre" className="form-label">H. Lacre</label>
                                    <input
                                        {...register("horalacre", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="text"
                                        className="form-control"
                                        id={`horalacre${dataOcorrencia.id}`}
                                        onChange={AplicaMascara}
                                    />
                                    {errors.horalacre && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="kmsaida" className="form-label">Km de Saída</label>
                                    <input
                                        {...register("kmsaida", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="number"
                                        className="form-control"
                                        id={`kmsaida${dataOcorrencia.id}`}
                                        defaultValue={dataOcorrencia.kmsaida || ''}
                                    />
                                    {errors.kmsaida && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="kmretorno" className="form-label">Km de Retorno</label>
                                    <input
                                        {...register("kmretorno", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="number"
                                        className="form-control"
                                        id={`kmretorno${dataOcorrencia.id}`}
                                        defaultValue={dataOcorrencia.kmretorno || ''}
                                    />
                                    {errors.kmretorno && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                <div className="row ms-2 me-2 mt-2 mb-3">
                    <div className="col-sm">
                        <label htmlFor="resumo" className="form-label">Resumo*</label>
                        <textarea {...register("resumo", { required: false })} className="form-control" id={`resumo${dataOcorrencia.id}`} rows="3" onBlur={(handleSubmit((formData) => handleLastFieldBlur(formData)))}></textarea>
                        {errors.resumo && <span className='fieldRequired'>Campo obrigatório</span>}
                    </div>
                </div>
                <div className="row ms-2 me-2 mt-2 mb-3">
                    <div className="col-sm">
                        <label htmlFor="procedimentos" className="form-label">Procedimentos</label>
                        <textarea
                            className="form-control"
                            id="procedimentos"
                            rows="3"
                            defaultValue={dataOcorrencia.cliente?.procedimento || "não disponível"}
                            disabled
                        />
                        {errors.procedimentos && <span className='fieldRequired'>Campo obrigatório</span>}
                    </div>
                </div>
                {errors.envio && <span className='fieldRequired'>Campo obrigatório</span>}

            </form>
        </Formulario>
    )

}

FormularioOcorrencia.propTypes = {
    dataOcorrencia: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    handleSelectTipoOcorrencia: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    selectedValue: PropTypes.string.isRequired,
    handleSelectDeslocamento: PropTypes.func.isRequired,
    filteredSubCategories: PropTypes.array.isRequired,
}

export default FormularioOcorrencia;