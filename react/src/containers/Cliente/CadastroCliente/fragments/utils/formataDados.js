// src/utils/formatadorDados.js

import { format, parseISO } from 'date-fns';

export const formatarContatos = (contatos) => (
    contatos && contatos.length > 0
        ? contatos.map(contato => ({
            ...contato,
            dataNascimento: contato.dataNascimento ? format(parseISO(contato.dataNascimento), 'yyyy-MM-dd') : ''
        }))
        : []
);

export const formatarSetores = (setores) => (
    setores && setores.length > 0
        ? setores
        : [{ setor: '', localizacao: '', observacao: '' }]
);

export const formatarViagens = (viagens) => (
    viagens && viagens.length > 0
        ? viagens.map(viagem => ({
            ...viagem,
            dataSaida: viagem.dataSaida ? format(parseISO(viagem.dataSaida), 'yyyy-MM-dd') : '',
            dataVolta: viagem.dataVolta ? format(parseISO(viagem.dataVolta), 'yyyy-MM-dd') : ''
        }))
        : []
);
