const useHandleChangeNatureza = (setNatureza) => {
    const handleChangeNatureza = (e) => {
        try {
            const selectedNatureza = e.target.value;
            setNatureza(selectedNatureza);
        } catch (error) {
            console.error('Erro ao lidar com a mudança de natureza:', error);
        }
    };

    return handleChangeNatureza;
};

export default useHandleChangeNatureza;
