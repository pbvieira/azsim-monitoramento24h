import PropTypes from "prop-types";
import CardEventos from "./CardEventos";


const EventoList = ({ eventos }) => {

    const renderEventCard = (data, index) => {
        if (data.id) return null;

        const gravidadeClassEvento = data.gravidade === '' ? 'evento-normal-gravidade' : 'evento-grave-gravidade';
        return <CardEventos key={index} index={index} data={data} gravidadeClassEvento={gravidadeClassEvento} />;
    };

    return (
        <>
            {eventos.map((data, index) => renderEventCard(data, index))}
        </>
    );
};

EventoList.propTypes = {
    eventos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            gravidade: PropTypes.string,
        })
    ).isRequired,
};

export default EventoList;
