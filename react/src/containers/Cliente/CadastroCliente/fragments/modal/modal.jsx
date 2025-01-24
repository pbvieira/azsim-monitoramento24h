/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Background, Container } from "./style";
import { formatDateForInput } from "./utils/FormateDates";
import ModalContato from "./fragments/ModalContato";
import ModalSetor from "./fragments/ModalSetores";
import ModalViagem from "./fragments/ModalViagem";
import PropTypes from "prop-types";
import useHandleSave from "./hooks/useHandleSave";

// eslint-disable-next-line react/prop-types
function Modal({ dadosBasicos, setDadosBasicos, setShowModal, index, tabSelected }) {
    const [contato, setContato] = useState({
        nome: '',
        telefone: '',
        senha: '',
        contraSenha: '',
        dataNascimento: '',
        observacao: '',
        index: index
    });

    const [setor, setSetor] = useState({
        setor: '',
        localizacao: '',
        observacao: '',
        index: index
    });

    const [viagens, setViagens] = useState({
        nomeContatoNotificacaoSaida: '',
        nomeContatoNotificacaoVolta: '',
        observacao: '',
        dataSaida: '',
        dataVolta: '',
        procedimentos: '',
        index: index
    });

    useEffect(() => {
        if (index !== null) {
            if (tabSelected === 'contatos') {
                const contatoParaEdicao = dadosBasicos.contatos[index];
                if (contatoParaEdicao) {
                    setContato({
                        ...contatoParaEdicao,
                        dataNascimento: formatDateForInput(contatoParaEdicao.dataNascimento),
                    });
                }
            } else if (tabSelected === 'setores') {
                const setorParaEdicao = dadosBasicos.setores[index];
                if (setorParaEdicao) {
                    setSetor(setorParaEdicao);
                }
            } else if (tabSelected === 'viagens') {
                const viagemParaEdicao = dadosBasicos.viagens[index];
                if (viagemParaEdicao) {
                    setViagens({
                        ...viagemParaEdicao,
                        dataSaida: formatDateForInput(viagemParaEdicao.dataSaida),
                        dataVolta: formatDateForInput(viagemParaEdicao.dataVolta)
                    });
                }
            }
        }
    }, [index, dadosBasicos, tabSelected]);

    const handleDateChange = (e) => {
        const dateInput = e.target.value;
        setContato({ ...contato, dataNascimento: dateInput });
    };

    const handleViagensDateChange = (e, field) => {
        const dateInput = e.target.value;
        setViagens({ ...viagens, [field]: dateInput });
    };

    const handleSave = useHandleSave({
        dadosBasicos,
        setDadosBasicos,
        contato,
        setor,
        viagens,
        index,
        tabSelected,
        setShowModal
    });

    return (
        <Background>
            {tabSelected === 'contatos' && (
                <Container>
                    <ModalContato index={index} setShowModal={setShowModal} contato={contato} setContato={setContato} handleSave={handleSave} handleDateChange={handleDateChange} />
                </Container>
            )}
            {tabSelected === 'setores' && (
                <Container>
                    <ModalSetor index={index} setShowModal={setShowModal} setor={setor} setSetor={setSetor} handleSave={handleSave} />
                </Container>
            )}
            {tabSelected === 'viagens' && (
                <Container>
                    <ModalViagem index={index} setShowModal={setShowModal} viagens={viagens} setViagens={setViagens} handleSave={handleSave} handleViagensDateChange={handleViagensDateChange} />
                </Container>
            )}
        </Background>
    );
}

Modal.propTypes = {
    dadosBasicos: PropTypes.shape({
        contatos: PropTypes.array.isRequired,
        setores: PropTypes.array.isRequired,
        viagens: PropTypes.array.isRequired,
    }).isRequired,
    setDadosBasicos: PropTypes.func.isRequired,
    setShowModal: PropTypes.func.isRequired,
    index: PropTypes.number,
    tabSelected: PropTypes.string.isRequired,
};

export default Modal;
