export const validarCamposObrigatorios = (data, campos, setError) => {
    campos.forEach((campo) => {
        if (!data[campo]) {
            setError(campo, {
                type: 'manual',
                message: 'Este campo é obrigatório',
            });
        }
    });
};
