/* eslint-disable react/prop-types */
// OcorrenciaCard.js
import PropTypes from "prop-types";
import CardOcorrencia from "./CardOcorrencia";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2";

const OcorrenciaList = ({ ocorrencias, handleDadosOcorrencia }) => {
    const tamanhoListaOcorrencias = useRef(ocorrencias.length);


    useEffect(() => {
        if (ocorrencias.length > tamanhoListaOcorrencias.current) {
            const somOcorrencia = new Audio('/audio/somOcorrencia.mp3');
            somOcorrencia.play();

            const novaOcorrencia = ocorrencias[0];
            const clienteNome = novaOcorrencia?.evento?.nmcliente || 'Cliente desconhecido';

            Swal.fire({
                title: "Nova ocorrência recebida!",
                text: `Nova ocorrência recebida de ${clienteNome}`,
                icon: "warning",
                confirmButtonText: "Ok",
            });

        }
        tamanhoListaOcorrencias.current = ocorrencias.length;
    }, [ocorrencias]);



    const renderOcorrenciaCard = (dataOcorrencia, index) => {

        if (!dataOcorrencia.id) return null;
        const borderColor = (() => {
            switch (dataOcorrencia.evento.grupo) {
                case 'ALR':
                    return 'red';
                case 'EME':
                    return 'orange';
                case 'MNT':
                    return 'yellow';
                case 'MNB':
                    return 'green';
                default:
                    return 'gray';
            }
        })();

        return (
            <CardOcorrencia
                key={index}
                index={index}
                dataOcorrencia={dataOcorrencia}
                handleDadosOcorrencia={handleDadosOcorrencia}
                borderColor={borderColor}
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
