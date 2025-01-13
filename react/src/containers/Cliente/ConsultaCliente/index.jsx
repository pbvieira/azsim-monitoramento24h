import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useState } from 'react';
import api from '../../../services/api';
import Filtro from './fragments/Filtro';
import HeaderCliente from './fragments/HeaderCliente';
import useConsultaCliente from './hooks/handleConsultaClientes';
import MensagemTabela from './fragments/MensagemTabela';
import ClientesRow from './fragments/ClienteRow';
import ValorFiltroReq from './fragments/ValorFiltroReq';
import HeaderPage from '../../../components/HeaderPages';
import { Container, Fundo } from '../../../components/Formularios/Form';
import { Exibicao } from './styles';

function ConsultaCliente() {
  const [clientes, setClientes] = useState([])
  const [filtro, setFiltro] = useState('')
  const [dadosBasicos, setDadosBasicos] = useState({});

  const handleConsultaClientes = useConsultaCliente({
    setClientes,
    filtro,
    api
  });

  const clientesLista = filtro ? clientes : '';

  return (
    <Container>
      <HeaderPage title="Consulta de Clientes" subtitle={'Consulte os dados de seus clientes'} location={'Home > Consulta de clientes'} />
      <Fundo>
        <Filtro
          filtro={filtro}
          onChange={(e) => ValorFiltroReq(e, setFiltro, setClientes)}
          onSearch={handleConsultaClientes}
        />

        <Exibicao>
          {clientesLista.length > 0 ? (
            <>
              <HeaderCliente />
              {clientes.map((cliente, index) => (
                <ClientesRow key={index} cliente={cliente} index={index} dadosBasicos={dadosBasicos} setDadosBasicos={setDadosBasicos} api={api} />
              ))}
            </>
          ) : filtro && clientesLista.length === 0 ? (
            <MensagemTabela msg={'Nenhum resultado encontrado. Refine sua pesquisa para obter resultados.'} />
          ) : (
            <MensagemTabela msg={'Filtre para ter resultados.'} />
          )}
        </Exibicao>
      </Fundo>
    </Container>
  );
}

export default ConsultaCliente;