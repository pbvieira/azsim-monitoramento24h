/* eslint-disable react/prop-types */
// OcorrenciaCard.js
import PropTypes from "prop-types";
import CardOcorrencia from "./CardOcorrencia";
import { useEffect, useRef } from "react";

const OcorrenciaList = ({ ocorrencias, handleDadosOcorrencia }) => {
    const tamanhoListaOcorrencias = useRef(ocorrencias.length);

    useEffect(() => {
        if (ocorrencias.length > tamanhoListaOcorrencias.current) {
            const somOcorrencia = new Audio('/audio/somOcorrencia.mp3');
            somOcorrencia.play();
        }
        tamanhoListaOcorrencias.current = ocorrencias.length;
    }, [ocorrencias]);


    const renderOcorrenciaCard = (dataOcorrencia, index) => {
        if (!dataOcorrencia.id) return null;
        return (
            <CardOcorrencia
                key={index}
                index={index}
                dataOcorrencia={dataOcorrencia}
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
