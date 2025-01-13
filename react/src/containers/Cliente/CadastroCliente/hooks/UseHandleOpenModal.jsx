const useHandleOpenModal = (setShowModal, setIndex) => {
    const handleOpenModal = (index = null) => {
        setIndex(index);
        setShowModal(true);
    };

    return handleOpenModal;
};

export default useHandleOpenModal;
