import useConvertHoraToBackend from "../fragments/hooks/useConvertTime";

const useConverteHoraFromForm = () => {
    const { convertHoraToBackend } = useConvertHoraToBackend();

    const converterHoraFromForm = (datas) => {
        if (!datas) return null;

        try {
            const datasConvertidas = Object.entries(datas).reduce((acc, [key, value]) => {
                acc[key] = value !== '' ? convertHoraToBackend(value) : value;
                return acc;
            }, {});
            return datasConvertidas

        } catch (error) {
            console.error("Erro ao converter hora:", error);
            return null;
        }
    };
    return { converterHoraFromForm };
};

export default useConverteHoraFromForm;
