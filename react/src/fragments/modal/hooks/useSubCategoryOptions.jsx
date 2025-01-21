import { useMemo } from 'react';

const useSubCategoryOptions = () => {
    return useMemo(() => ({
        '1': [
            { value: 'setor Em Curto', label: 'SETOR EM CURTO' },
            { value: 'Sinal Teste Revisao', label: 'SINAL TESTE REVISAO' },
            { value: 'Sinal Teste Cliente', label: 'SINAL TESTE CLIENTE' },
            { value: 'conserto Sistema', label: 'CONSERTO SISTEMA' },
            { value: 'troca Codificador', label: 'TROCA CODIFICADOR' },
            { value: 'linha Telefonica Cortada', label: 'LINHA TELEFONICA CORTADA' },
            { value: 'sinal Teste Instalacao', label: 'SINAL TESTE INSTALACAO' },
            { value: 'bateria Fraca', label: 'BATERIA FRACA' },
            { value: 'teste Ctf Base Cliente', label: 'TESTE CTF BASE-CLIENTE' },
            { value: 'sensorIr', label: 'SENSOR IR/CONT.PRESO' },
            { value: 'sistema Com Problema-Colocacao RetiradaKit', label: 'SIST.C/PROBLEMA COLOCAÇÃO/RETIRADA KIT' },
            { value: 'canal Rf Aberto', label: 'CANAL RF ABERTO' },
            { value: 'mau Contato', label: 'MAU-CONTATO' },
            { value: 'az Senha', label: 'AZ SENHA AGENTE/TÉCNICO' },
        ],
        '2': [
            { value: 'sem Energia', label: 'SEM ENERGIA/REDE' },
            { value: 'ag No Local', label: 'AG NO LOCAL' },
            { value: 'presenca Animais', label: 'PRESENÇA DE ANIMAIS E/OU INSETOS' },
            { value: 'alarme Acidental', label: 'SINAL DE ALARME ACIDENTAL' },
            { value: 'procedimento Partida', label: 'PROCEDIMENTO PARTIDA' },
            { value: '3 SOS', label: 'SUBTIPOOCORRENCIA 3 SOS' },
            { value: 'suspeito Local', label: 'SINAL POR SUSPEITO NO LOCAL' },
            { value: 'arrombamento', label: 'SINAL ALARME ARROMBAMENTO' },
            { value: 'janela/porta Mal Fechada', label: 'JANELA/PORTA MAL FECHADA' },
            { value: 'alarme indesejado', label: 'SINAL DE ALARME INDESEJADO' },
        ],
        '3': [
            { value: 'situacao bloqueio', label: 'SITUAÇÃO DE BLOQUEIO' },
            { value: 'ativacao remota', label: 'ATIVAÇÃO REMOTA MTA' },
            { value: 'abertura/fechamento', label: 'ACOMPANHAMENTO ABERTURA/FECHAMENTO' },
            { value: 'verificacao externa', label: 'VERIFICAÇÃO EXTERNA' },
            { value: 'presenca no local (solicitada)', label: 'PRESENÇA NO LOCAL(SOLICITADO PELO CLIENTE)' },
            { value: 'deslacre de chave', label: 'DESLACRE DE CHAVE' },
            { value: 'malote', label: 'MALOTE' },
            { value: 'desativacao remota', label: 'DESATIVAÇÃO REMOTA MTA' },
            { value: 'ponto base', label: 'PONTO BASE' },
        ],
        '5': [{ value: 'suporte', label: 'SUPORTE' }],
        '7': [{ value: 'ronda', label: 'RONDA' }],
    }), []);
};

export default useSubCategoryOptions;
