export const deleteContato = (dadosBasicos, setDadosBasicos, index) => {
    setDadosBasicos({
        ...dadosBasicos,
        contatos: dadosBasicos.contatos.filter((_, i) => i !== index),
    });
};

export const deleteSetor = (dadosBasicos, setDadosBasicos, index) => {
    setDadosBasicos({
        ...dadosBasicos,
        setores: dadosBasicos.setores.filter((_, i) => i !== index),
    });
};

export const deleteViagem = (dadosBasicos, setDadosBasicos, index) => {
    setDadosBasicos({
        ...dadosBasicos,
        viagens: dadosBasicos.viagens.filter((_, i) => i !== index),
    });
};
