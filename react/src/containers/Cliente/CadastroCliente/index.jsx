/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Formulario, Fundo } from '../../../components/Formularios/Form';
import TabsNavegacao from './fragments/FormsCadastro/tabsNavegacao';
import FormButtons from './fragments/FormsCadastro/formButtonsCadastro';
import Modal from './fragments/modal/modal';
import useSubmitCliente from './hooks/UseOnSubmit';
import useCarregarDadosCliente from './hooks/UseCarregaDadosCliente';
import useDeleteItem from './hooks/UseDeleteCliente';
import useFormatDadosBasicos from './hooks/UseFormataDatasDadosBascios';
import useHandleNovoCliente from './hooks/UseHandleNovoCliente';
import useHandleChangeNatureza from './hooks/UseHandleNatureza';
import useHandleOpenModal from './hooks/UseHandleOpenModal';
import useChamaCarregaDadosCliente from './hooks/UseChamaCarregaDadosCliente';
import { DadosBasicosForm } from './components/DadosBasicos';
import ContatosForm from './components/Contatos';
import SetoresForm from './components/Setores';
import ViagensForm from './components/Viagens';
import HeaderPage from '../../../components/HeaderPages';

function CadastroCliente() {
    const { register, handleSubmit, formState: { errors }, setError, setValue } = useForm({});
    const [natureza, setNatureza] = useState("FISICA");
    const [idCliente, setIdCliente] = useState();
    const [showModal, setShowModal] = useState();
    const [tabSelected, setTabSelected] = useState('');
    const [index, setIndex] = useState(null);
    const { id: idNaURL } = useParams();
    const [dadosBasicos, setDadosBasicos] = useState({
        unidade: 'Montenegro',
        codHabil: '',
        codCondor: '',
        codificador: '',
        natureza: 'FISICA',
        documento: '',
        inscMunicipal: '',
        nome: '',
        nomeFantasia: '',
        endereco: '',
        bairro: '',
        cidade: '',
        uf: 'AC',
        cep: '',
        observacao: '',
        contatos: [],
        setores: [],
        viagens: [],
    });

    useFormatDadosBasicos(dadosBasicos, setDadosBasicos);
    const carregarDadosCliente = useCarregarDadosCliente(idNaURL, setDadosBasicos, setValue);
    const { onSubmit } = useSubmitCliente(idCliente, dadosBasicos, carregarDadosCliente, setError, setIdCliente);
    const deleteItem = useDeleteItem(dadosBasicos, setDadosBasicos);
    useChamaCarregaDadosCliente(carregarDadosCliente);
    const handleNovoCliente = useHandleNovoCliente(dadosBasicos, setDadosBasicos);
    const handleChangeNatureza = useHandleChangeNatureza(setNatureza);
    const handleOpenModal = useHandleOpenModal(setShowModal, setIndex);

    return (
        <Container>
            {showModal && <Modal index={index} tabSelected={tabSelected} dadosBasicos={dadosBasicos} setDadosBasicos={setDadosBasicos} setShowModal={setShowModal} />}
            <HeaderPage title="Cadastro de Clientes" subtitle={'Cadastre e edite seus clientes'} location={'Home > Cadastro de clientes'} />
            <Fundo>
                <Formulario>
                    <TabsNavegacao setTabSelected={setTabSelected} />
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="dadosBasicos" role="tabpanel" aria-labelledby="dadosBasicos-tab">
                            <DadosBasicosForm
                                dadosBasicos={dadosBasicos}
                                register={register}
                                setDadosBasicos={setDadosBasicos}
                                errors={errors}
                                natureza={natureza}
                                handleChangeNatureza={handleChangeNatureza}
                            />
                        </div>

                        <div className="tab-pane fade" id="contatos" role="tabpanel" aria-labelledby="contatos-tab">
                            <ContatosForm
                                dadosBasicos={dadosBasicos}
                                handleOpenModal={handleOpenModal}
                                deleteItem={deleteItem}
                            />

                        </div>

                        <div className="tab-pane fade" id="setorizacao" role="tabpanel" aria-labelledby="setorizacao-tab">
                            <SetoresForm
                                dadosBasicos={dadosBasicos}
                                handleOpenModal={handleOpenModal}
                                deleteItem={deleteItem}
                            />

                        </div>

                        <div className="tab-pane fade" id="viagens" role="tabpanel" aria-labelledby="viagens-tab">
                            <ViagensForm
                                dadosBasicos={dadosBasicos}
                                handleOpenModal={handleOpenModal}
                                deleteItem={deleteItem}
                            />
                        </div>
                    </div>
                </Formulario>
				
                <FormButtons handleSubmit={handleSubmit} onSubmit={onSubmit} handleNovoCliente={handleNovoCliente} handleOpenModal={handleOpenModal} setTabSelected={setTabSelected} />

            </Fundo>

        </Container>
    );


}
export default CadastroCliente;