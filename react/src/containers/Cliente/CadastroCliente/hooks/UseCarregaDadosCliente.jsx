import { useCallback } from 'react';
import { formatarContatos, formatarSetores, formatarViagens } from '../fragments/utils/formataDados';
import api from '../../../../services/api';


const useCarregarDadosCliente = (idNaURL, setDadosBasicos, setValue) => {
    const carregarDadosCliente = useCallback(async () => {
        try {
            if (idNaURL) {
                const response = await api.get(`clientes/${idNaURL}`);
                const clienteParaEdicao = response.data;

                const contatos = formatarContatos(clienteParaEdicao.contatos);
                const setores = formatarSetores(clienteParaEdicao.setores);
                const viagens = formatarViagens(clienteParaEdicao.viagens);

                setDadosBasicos({
                    id: clienteParaEdicao.id,
                    unidade: clienteParaEdicao.unidade || 'Montenegro',
                    codHabil: clienteParaEdicao.codHabil || '',
                    codCondor: clienteParaEdicao.codCondor || '',
                    codificador: clienteParaEdicao.codificador || '',
                    natureza: clienteParaEdicao.natureza || 'FISICA',
                    documento: clienteParaEdicao.documento || '',
                    inscMunicipal: clienteParaEdicao.inscMunicipal || '',
                    nome: clienteParaEdicao.nome || '',
                    nomeFantasia: clienteParaEdicao.nomeFantasia || '',
                    endereco: clienteParaEdicao.endereco || '',
                    bairro: clienteParaEdicao.bairro || '',
                    cidade: clienteParaEdicao.cidade || '',
                    uf: clienteParaEdicao.uf || 'AC',
                    cep: clienteParaEdicao.cep || '',
                    observacao: clienteParaEdicao.observacao || '',
                    contatos: contatos,
                    setores: setores,
                    viagens: viagens,
                });

                Object.entries(clienteParaEdicao).forEach(([campo, valor]) => {
                    setValue(campo, valor);
                });
            }
        } catch (error) {
            console.error('Erro ao carregar dados do cliente:', error);
        }
    }, [idNaURL, setValue, setDadosBasicos]);

    return carregarDadosCliente;
};

export default useCarregarDadosCliente;
