/* eslint-disable react/prop-types */

import { Button } from "reactstrap";
import { RowConsultas } from "../../../../styles/stylesComponents";
import { Cliente, VerMais, Codificador, DataCadastro, DataEncerramento, EmUso, Unidade } from "../styles";
import SetIcon from "./SetIcon";

// eslint-disable-next-line no-unused-vars
function CodificadorRow({ index, codificador }) {

    return (
        <RowConsultas key={index}>
            <Codificador><span>{codificador.codificador}</span></Codificador>
            <Cliente><span>{codificador.cliente}</span></Cliente>
            <Unidade>
                <span>{codificador.unidade}</span>
            </Unidade>
            <DataCadastro><span>{codificador.dataCadastro}</span></DataCadastro>
            <DataEncerramento><span>{codificador.dataEncerramento}</span></DataEncerramento>
            <EmUso><span>{SetIcon(codificador.emUso)}</span></EmUso>
            <VerMais><Button title={'Ver Mais'} >Ver Mais</Button></VerMais>
        </RowConsultas >
    );
}

export default CodificadorRow;
