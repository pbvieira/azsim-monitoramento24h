import { useEffect } from 'react';
import { formatarContatos, formatarViagens } from '../fragments/utils/formataDados';

const useFormatDadosBasicos = (dadosBasicos, setDadosBasicos) => {
    useEffect(() => {
        const dadosFormatados = { ...dadosBasicos };

        dadosFormatados.contatos = formatarContatos(dadosBasicos.contatos);
        dadosFormatados.viagens = formatarViagens(dadosBasicos.viagens);

        setDadosBasicos(dadosFormatados);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setDadosBasicos]);
};

export default useFormatDadosBasicos;
