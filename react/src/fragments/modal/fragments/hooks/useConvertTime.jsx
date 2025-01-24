import { addHours, format, parseISO } from "date-fns";

export const useConvertHoraToBackend = () => {
    const convertHoraToBackend = (horaMinuto) => {
        if (!horaMinuto) return null;
        try {
            const [hora, minuto] = horaMinuto.split(":");
            const dataCompleta = new Date();
            dataCompleta.setHours(hora, minuto, 0, 0);
            return format(dataCompleta, "yyyy-MM-dd'T'HH:mm:ss");
        } catch (error) {
            console.error("Erro ao converter hora:", error);
            return null;
        }
    };
    return { convertHoraToBackend };
};

export const useConvertHoraToFrontend = () => {
    const convertHoraToFrontend = (dataString) => {
        if (!dataString) return '';
        try {
            const dataCompleta = parseISO(dataString);
            const dataComFusoAjustado = addHours(dataCompleta, 3);
            return format(dataComFusoAjustado, "HH:mm");
        } catch (error) {
            console.error("Erro ao converter hora:", error);
            return '';
        }
    };

    return { convertHoraToFrontend };
};
