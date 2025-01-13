import PropTypes from 'prop-types';
import { format, parseISO, isValid, addHours } from 'date-fns';
import { Formulario } from '../style';

function applyHourMask(value) {
    let formattedValue = value.replace(/\D/g, '');

    if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}:${formattedValue.slice(2, 4)}`;
    }

    return formattedValue;
}

function FormularioOcorrencia({ dataOcorrencia, handleSubmit, onSubmit, register, handleSelectTipoOcorrencia, errors, selectedValue, handleSelectDeslocamento, filteredSubCategories }) {

    const AplicaMascara = (event) => {
        event.target.value = applyHourMask(event.target.value);
    };

    const formataHoraDoBackEnd = (dataHora) => {
        if (!dataHora) return '';
        const parsedDate = parseISO(dataHora);
        if (!isValid(parsedDate)) return '';
        const adjustedDate = addHours(parsedDate, 3);
        return format(adjustedDate, 'HH:mm');
    };

    const horaSaidaEmpFormatada = formataHoraDoBackEnd(dataOcorrencia.horasaidaemp);
    const horaChegadaClienteFormatada = formataHoraDoBackEnd(dataOcorrencia.horachegadacliente);
    const horaSaidaClienteFormatada = formataHoraDoBackEnd(dataOcorrencia.horasaidacliente);
    const horaChegadaEmpFormatada = formataHoraDoBackEnd(dataOcorrencia.horachegadaemp);
    const horaAberturaLacreFormatada = formataHoraDoBackEnd(dataOcorrencia.horaaberturalacre);
    const horaLacreFormatada = formataHoraDoBackEnd(dataOcorrencia.lacre);

    return (
        <Formulario>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row ms-1 me-2 mt-2">
                    <div className="col">
                        <label htmlFor="tipoocorrencia" className="form-label">Categoria</label>
                        <select
                            {...register("tipoocorrencia", { required: false })}
                            id={`tipoocorrencia${dataOcorrencia.id}`}
                            className="form-select"
                            onChange={handleSelectTipoOcorrencia}
                        >
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
                        <label htmlFor="subtipoocorrencia" className="form-label">Sub-Categoria</label>
                        <select
                            {...register("subtipoocorrencia", { required: false })}
                            id={`subtipoocorrencia${dataOcorrencia.id}`}
                            className="form-select"
                        >
                            <option value="">Selecione uma Sub-Categoria</option>
                            {filteredSubCategories.map(sub => (
                                <option key={sub.value} value={sub.value}>{sub.label}</option>
                            ))}
                        </select>
                        {errors.subCategoria && <span className='fieldRequired'>Campo obrigatório</span>}
                    </div>

                    <div className="col">
                        <label htmlFor="operador" className="form-label">Operador</label>
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
                                        defaultValue={horaSaidaEmpFormatada}
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
                                        defaultValue={horaChegadaClienteFormatada}
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
                                        defaultValue={horaSaidaClienteFormatada}
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
                                        defaultValue={horaChegadaEmpFormatada}
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
                                        defaultValue={horaAberturaLacreFormatada}
                                        onChange={AplicaMascara}
                                    />
                                    {errors.horaAbateLacre && <span className='fieldRequired'>Campo obrigatório</span>}
                                </div>
                                <div className="col">
                                    <label htmlFor="lacre" className="form-label">H. Lacre</label>
                                    <input
                                        {...register("lacre", { required: false })}
                                        disabled={selectedValue === 'nao'}
                                        type="text"
                                        className="form-control"
                                        id={`lacre${dataOcorrencia.id}`}
                                        defaultValue={horaLacreFormatada}
                                        onChange={AplicaMascara}
                                    />
                                    {errors.lacre && <span className='fieldRequired'>Campo obrigatório</span>}
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
                        <textarea {...register("resumo", { required: false })} className="form-control" id={`resumo${dataOcorrencia.id}`} rows="3"></textarea>
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
                {/* <div className="form-check ms-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Enviar
                    </label>
                </div>
                <div className="form-check ms-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Encerrar
                    </label>
                </div> */}
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