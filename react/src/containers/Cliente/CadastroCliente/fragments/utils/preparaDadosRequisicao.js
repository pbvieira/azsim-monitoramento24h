export const prepararDadosRequisicao = (dadosBasicos, idCliente) => {
    let contatos = dadosBasicos.contatos.map((contato) => ({
        nome: contato.nome,
        telefone: contato.telefone,
        senha: contato.senha,
        contraSenha: contato.contraSenha,
        dataNascimento: contato.dataNascimento,
        procedimento: contato.procedimento,
    }));

    let setores = dadosBasicos.setores.map((setor) => ({
        setor: setor.setor,
        localizacao: setor.localizacao,
        observacao: setor.observacao,
    }));

    let viagens = dadosBasicos.viagens.map((viagem) => ({
        nomeContatoNotificacaoSaida: viagem.nomeContatoNotificacaoSaida,
        nomeContatoNotificacaoVolta: viagem.nomeContatoNotificacaoVolta,
        observacao: viagem.observacao,
        dataSaida: viagem.dataSaida,
        dataVolta: viagem.dataVolta,
        procedimento: viagem.procedimentos,
    }));

    return {
        id: idCliente,
        ...dadosBasicos,
        contatos,
        setores,
        viagens,
    };
};
