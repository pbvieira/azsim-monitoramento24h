import { useCallback } from 'react';
import { deleteContato, deleteSetor, deleteViagem } from '../fragments/utils/deletaItem';

const useDeleteItem = (dadosBasicos, setDadosBasicos) => {
    const deleteItem = useCallback((type, index) => {
        try {
            switch (type) {
                case 'contatos':
                    deleteContato(dadosBasicos, setDadosBasicos, index);
                    break;
                case 'setores':
                    deleteSetor(dadosBasicos, setDadosBasicos, index);
                    break;
                case 'viagens':
                    deleteViagem(dadosBasicos, setDadosBasicos, index);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error('Erro ao deletar item:', error);
        }
    }, [dadosBasicos, setDadosBasicos]);

    return deleteItem;
};

export default useDeleteItem;
