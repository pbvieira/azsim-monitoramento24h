import PropTypes from "prop-types";
import CardEventos from "./CardEventos";


const EventoList = ({ eventos }) => {

    const renderEventCard = (data, index) => {
        if (data.id) return null;

        const borderColor = (() => {
            switch (data.grupo) {
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
        return <CardEventos key={index} index={index} data={data} borderColor={borderColor} />;
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
