/* eslint-disable react/prop-types */
// OcorrenciaCard.js
import PropTypes from "prop-types";
import CardOcorrencia from "./CardOcorrencia";

const OcorrenciaList = ({ ocorrencias, handleDadosOcorrencia }) => {
    const renderOcorrenciaCard = (dataOcorrencia, index) => {
        if (!dataOcorrencia.id) return null;

        const gravidadeClass = dataOcorrencia.gravidade === 'normal' ? 'normal-gravidade' :
            dataOcorrencia.gravidade === 'moderada' ? 'moderada-gravidade' :
                'grave-gravidade';

        return (
            <CardOcorrencia
                key={index}
                index={index}
                dataOcorrencia={dataOcorrencia}
                gravidadeClass={gravidadeClass}
                handleDadosOcorrencia={handleDadosOcorrencia}
            />
        );
    };

    return (
        <>
            {ocorrencias.map((dataOcorrencia, index) => renderOcorrenciaCard(dataOcorrencia, index))}
        </>
    );
};

OcorrenciaList.propTypes = {
    ocorrencias: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            gravidade: PropTypes.string,
        })
    ).isRequired,
    handleDadosOcorrencia: PropTypes.func.isRequired,
};

export default OcorrenciaList;
