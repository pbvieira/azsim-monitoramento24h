
export const useDeslocamento = (setSelectedValue) => {

    const handleSelectDeslocamento = (event) => {
        setSelectedValue(event.target.value);
    };

    return handleSelectDeslocamento
};

export default useDeslocamento