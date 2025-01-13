/* eslint-disable react/prop-types */

import { Button } from "reactstrap";
import { RowConsultas } from "../../../../styles/stylesComponents";
import { Cliente, DataFim, DataInicio, Responsavel, Servico, Status, VerMais } from "../styles";
import SetIcon from "./SetIcon";


// eslint-disable-next-line no-unused-vars
function OSRow({ index, ordemServico }) {

    return (
        <RowConsultas key={index}>
            <Cliente><span>{ordemServico.cliente}</span></Cliente>
            <Servico><span>{ordemServico.servico}</span></Servico>
            <Status>
                <span>{SetIcon(ordemServico.status)}</span>
            </Status>
            <DataInicio><span>{ordemServico.dataInicio}</span></DataInicio>
            <DataFim><span>{ordemServico.dataFim}</span></DataFim>
            <Responsavel><span>{ordemServico.responsavel}</span></Responsavel>
            <VerMais><Button title={'Ver Mais'} >Ver Mais</Button></VerMais>
        </RowConsultas >
    );
}

export default OSRow;
