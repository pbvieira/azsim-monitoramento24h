/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from './fragments/Header';
import DadosCadastro from './fragments/DadosCadastro';
import { BodyModal, HeaderModal } from './style';
import FormularioOcorrencia from './fragments/FormularioOcorrencia';
import Modal from './modalFinalizaOcorrencia/modal';
import useSetValuesCampos from './hooks/useSetValuesCampos';
import useOnSubmit from './hooks/useSubmit';
import useEnviaDados from './hooks/useEnviaDados';
import useSubCategoryOptions from './hooks/useSubCategoryOptions';
import useDeslocamento from './hooks/useSelectDeslocamento';
import useCamposDeslocamento from './hooks/useCamposDeslocamentoPreenchidos';
import useTipoOcorrencia from './hooks/useTipoOcorrencia';

function ModalOcorrencia({ dataOcorrencia, setOcorrencias }) {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [modalOpen, setModalOpen] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [aberta, setAberta] = useState(null)
    const [selectedValue, setSelectedValue] = useState(dataOcorrencia.deslocamento ? "sim" : "nao");
    const botaoRef = useRef(null);

    const handleSelectTipoOcorrencia = useTipoOcorrencia(setSelectedCategory);
    const camposDeslocamentoPreenchidos = useCamposDeslocamento;
    const handleSelectDeslocamento = useDeslocamento(setSelectedValue)
    useSetValuesCampos(setModalOpen, dataOcorrencia, setValue, setSelectedValue)
    const handleEnviarDados = useEnviaDados(dataOcorrencia, reset, setOcorrencias, setAberta)
    const handleOnSubmit = useOnSubmit(dataOcorrencia, camposDeslocamentoPreenchidos, handleEnviarDados, setModalOpen)
    const handleSubCategoryOptions = useSubCategoryOptions()
    const filteredSubCategories = handleSubCategoryOptions[selectedCategory] || [];

    const handleLastFieldBlur = () => {
        if (botaoRef.current) {
            botaoRef.current.click();
        }
    };

    return (
        modalOpen && <div className={`modal fade show`} id={`modal-${dataOcorrencia.id}`} tabIndex="-1" aria-labelledby={`modalLabel-${dataOcorrencia.id}`} aria-hidden={!modalOpen} style={{ display: modalOpen ? 'block' : 'none' }} data-bs-backdrop="false">
            {showModal && <Modal setAberta={setAberta} setShowModal={setShowModal} handleSubmit={handleSubmit} onSubmit={handleOnSubmit} dataOcorrencia={dataOcorrencia} />}
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <HeaderModal>
                        <Header dataOcorrencia={dataOcorrencia} />
                    </HeaderModal>
                    <div className="modal-body p-0">
                        <BodyModal>
                            <FormularioOcorrencia handleLastFieldBlur={handleLastFieldBlur} dataOcorrencia={dataOcorrencia} selectedValue={selectedValue} handleSubmit={handleSubmit} onSubmit={handleOnSubmit} register={register} handleSelectTipoOcorrencia={handleSelectTipoOcorrencia} handleSelectDeslocamento={handleSelectDeslocamento} errors={errors} filteredSubCategories={filteredSubCategories} />
                            <DadosCadastro dataOcorrencia={dataOcorrencia} />
                        </BodyModal>
                    </div>
                    <footer className="modal-footer justify-content-start">
                        <div className="row">
                            <div className="col-2 ms-1">
                                <button ref={botaoRef} id="dismiss-button" type="button" className="btn btn-secondary" onClick={() => setShowModal(true)} >Fechar</button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )

}

ModalOcorrencia.propTypes = {
    dataOcorrencia: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    register: PropTypes.func,
    selectedValue: PropTypes.string,
    handleSelectDeslocamento: PropTypes.func,
    setOcorrencias: PropTypes.func
};

export default ModalOcorrencia