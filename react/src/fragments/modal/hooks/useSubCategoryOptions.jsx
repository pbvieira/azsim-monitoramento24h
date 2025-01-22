import { useMemo } from 'react';

const useSubCategoryOptions = () => {
    return useMemo(() => ({
        '1': [
            { value: 'SETOR EM CURTO', label: 'SETOR EM CURTO' },
            { value: 'SINAL TESTE REVISAO', label: 'SINAL TESTE REVISÃO' },
            { value: 'SINAL TESTE CLIENTE', label: 'SINAL TESTE CLIENTE' },
            { value: 'CONSERTO SISTEMA', label: 'CONSERTO SISTEMA' },
            { value: 'TROCA CODIFICADOR', label: 'TROCA CODIFICADOR' },
            { value: 'LINHA TELEFONICA CORTADA', label: 'LINHA TELEFONICA CORTADA' },
            { value: 'SINAL TESTE INSTALACAO', label: 'SINAL TESTE INSTALACAO' },
            { value: 'BATERIA FRACA', label: 'BATERIA FRACA' },
            { value: 'TESTE CTF BASE CLIENTE', label: 'TESTE CTF BASE CLIENTE' },
            { value: 'SENSOR IR/CONT.PRESO', label: 'SENSOR IR/CONT.PRESO' },
            { value: 'SIST.C/PROBLEMA COLOCACAO/RETIRADA KIT', label: 'SIST.C/PROBLEMA COLOCAÇÃO/RETIRADA KIT' },
            { value: 'CANAL RF ABERTO', label: 'CANAL RF ABERTO' },
            { value: 'MAU-CONTATO', label: 'MAU-CONTATO' },
            { value: 'AZ SENHA AGENTE/TECNICO', label: 'AZ SENHA AGENTE/TÉCNICO' },
        ],
        '2': [
            { value: 'SEM ENERGIA/REDE', label: 'SEM ENERGIA/REDE' },
            { value: "AG NO LOCAL", label: 'AG NO LOCAL' },
            { value: 'PRESENCA DE ANIMAIS E/OU INSETOS', label: 'PRESENÇA DE ANIMAIS E/OU INSETOS' },
            { value: 'SINAL DE ALARME ACIDENTAL', label: 'SINAL DE ALARME ACIDENTAL' },
            { value: 'PROCEDIMENTO PARTIDA', label: 'PROCEDIMENTO PARTIDA' },
            { value: 'SUBTIPOOCORRENCIA 3 SOS', label: 'SUBTIPOOCORRENCIA 3 SOS' },
            { value: 'SINAL POR SUSPEITO NO LOCAL', label: 'SINAL POR SUSPEITO NO LOCAL' },
            { value: 'SINAL ALARME ARROMBAMENTO', label: 'SINAL ALARME ARROMBAMENTO' },
            { value: 'JANELA/PORTA MAL FECHADA', label: 'JANELA/PORTA MAL FECHADA' },
            { value: 'SINAL DE ALARME INDESEJADO', label: 'SINAL DE ALARME INDESEJADO' },
        ],
        '3': [
            { value: 'SITUACAO DE BLOQUEIO', label: 'SITUAÇÃO DE BLOQUEIO' },
            { value: 'ATIVACAO REMOTA MTA', label: 'ATIVAÇÃO REMOTA MTA' },
            { value: 'ACOMPANHAMENTO ABERTURA/FECHAMENTO', label: 'ACOMPANHAMENTO ABERTURA/FECHAMENTO' },
            { value: 'VERIFICACAO EXTERNA', label: 'VERIFICAÇÃO EXTERNA' },
            { value: 'PRESENCA NO LOCAL(SOLICITADO PELO CLIENTE)', label: 'PRESENÇA NO LOCAL(SOLICITADO PELO CLIENTE)' },
            { value: 'DESLACRE DE CHAVE', label: 'DESLACRE DE CHAVE' },
            { value: 'MALOTE', label: 'MALOTE' },
            { value: 'DESATIVACAO REMOTA MTA', label: 'DESATIVAÇÃO REMOTA MTA' },
            { value: 'PONTO BASE', label: 'PONTO BASE' },
        ],
        '5': [{ value: 'SUPORTE', label: 'SUPORTE' }],
        '7': [{ value: 'RONDA', label: 'RONDA' }],
    }), []);
};

export default useSubCategoryOptions;
