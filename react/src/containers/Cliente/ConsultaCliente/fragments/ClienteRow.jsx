/* eslint-disable react/prop-types */

import { Button } from "reactstrap";
import { Codificador, Nome, Unidade, VerMais } from "../styles";
import useEditCliente from "../hooks/handleEdit";
import { RowConsultas } from "../../../../styles/stylesComponents";


function ClientesRow({ index, cliente, dadosBasicos, setDadosBasicos, api }) {

    const handleEditCliente = useEditCliente({
        dadosBasicos,
        setDadosBasicos,
        api,
    });

    return (
        <RowConsultas key={index}>
            <Nome title={cliente.nome}><span>{cliente.nome}</span></Nome>
            <Codificador title={cliente.codificador}><span>{cliente.codificador}</span></Codificador>
            <Unidade title={cliente.unidade}><span>{cliente.unidade}</span></Unidade>
            <VerMais><Button title={'Ver Mais'} onClick={() => handleEditCliente(cliente.id)}>Ver Mais</Button></VerMais>
        </RowConsultas>
    );
}

export default ClientesRow;
