import { formatDateToBackend } from "../utils/FormateDates";

const useHandleSave = ({ dadosBasicos, setDadosBasicos, contato, setor, viagens, index, tabSelected, setShowModal }) => {
    const handleSave = () => {
        if (tabSelected === 'contatos') {
            const contatoComDataConvertida = {
                ...contato,
                dataNascimento: formatDateToBackend(contato.dataNascimento),
            }
            const novosContatos = [...dadosBasicos.contatos];
            if (index !== null) {
                novosContatos[index] = contatoComDataConvertida;
            } else {
                novosContatos.push(contatoComDataConvertida);
            }
            setDadosBasicos({ ...dadosBasicos, contatos: novosContatos });
        } else if (tabSelected === 'setores') {
            const novosSetores = [...dadosBasicos.setores];
            if (index !== null) {
                novosSetores[index] = setor;
            } else {
                novosSetores.push(setor);
            }
            setDadosBasicos({ ...dadosBasicos, setores: novosSetores });
        } else if (tabSelected === 'viagens') {
            const viagemComDataConvertida = {
                ...viagens,
                dataSaida: formatDateToBackend(viagens.dataSaida),
                dataVolta: formatDateToBackend(viagens.dataVolta)
            };
            const novasViagens = [...dadosBasicos.viagens];
            if (index !== null) {
                novasViagens[index] = viagemComDataConvertida;
            } else {
                novasViagens.push(viagemComDataConvertida);
            }
            setDadosBasicos({ ...dadosBasicos, viagens: novasViagens });
        }
        setShowModal(false);

    };

    return handleSave;
};

export default useHandleSave;
