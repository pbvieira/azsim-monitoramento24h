import { Fragment } from "react";
import PropTypes from 'prop-types';
import { CardDiv, CardBody, NomeOcorrencia, DescricaoOcorrencia } from "../styles";

function CardOcorrencia({ index, dataOcorrencia, PegaDadosComplementares, gravidadeClass }) {
    return (
        <Fragment key={index}>
            <CardDiv onClick={() => { PegaDadosComplementares(dataOcorrencia.id, dataOcorrencia.evento.idcliente) }} data-bs-toggle="modal" data-bs-target={`#modal-${dataOcorrencia.id}`} gravidade={gravidadeClass}>
                <CardBody id='cardOcorrencia'
                    gravidade={gravidadeClass} >
                    <DescricaoOcorrencia title={dataOcorrencia && dataOcorrencia.evento ? dataOcorrencia.evento.destatus : ""}>
                        {dataOcorrencia && dataOcorrencia.evento ? dataOcorrencia.evento.destatus : ""} <span className="material-symbols-outlined">
                            zone_person_alert
                        </span>
                    </DescricaoOcorrencia>
                    <NomeOcorrencia title={dataOcorrencia && dataOcorrencia.evento ? dataOcorrencia.evento.nmcliente : ""}>
                        {dataOcorrencia && dataOcorrencia.evento ? dataOcorrencia.evento.nmcliente : ""}
                    </NomeOcorrencia>
                </CardBody>
            </CardDiv>
        </Fragment>
    );
}

CardOcorrencia.propTypes = {
    index: PropTypes.number.isRequired,
    dataOcorrencia: PropTypes.shape({
        id: PropTypes.string.isRequired,
        evento: PropTypes.shape({
            idcliente: PropTypes.string.isRequired,
            destatus: PropTypes.string,
            nmcliente: PropTypes.string,
        }).isRequired,
    }).isRequired,
    PegaDadosComplementares: PropTypes.func.isRequired,
    gravidadeClass: PropTypes.string.isRequired,
};
export default CardOcorrencia;
