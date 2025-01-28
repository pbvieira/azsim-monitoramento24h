import "../../fragments/ErrorCard/init";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useState } from 'react';
import { Container, Eventos, Main, Ocorrencias } from "./styles";
import EventoList from './fragments/RenderEventoCard';
import OcorrenciaList from './fragments/RenderOcorrenciaCard';
import ModalOcorrencia from "../../fragments/modalOcorrencia/ModalOcorrencia";
import HeaderEventos from "./fragments/HeaderEventos";
import useConectaSocket from "./hooks/useConectaSocket";
import useDadosOcorrencia from "./hooks/useDadosOcorrencia.jsx";
import HeaderPage from "../../components/HeaderPages";

function Monitor() {
  const [eventos, setEventos] = useState([]);
  const [ocorrencias, setOcorrencias] = useState([]);
  const [ocorrenciaModal, setOcorrenciaModal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useConectaSocket(setOcorrencias, setEventos);

  const handleDadosOcorrencia = useDadosOcorrencia(setOcorrenciaModal, setShowModal);

  return (
    <Container>

      <HeaderPage title="Monitor de Eventos" subtitle={'Controle os eventos'} location={'Home > Monitor de Eventos'} />

      <Main>

        <Eventos>
          <HeaderEventos />
          <EventoList eventos={eventos} />
        </Eventos>

        <Ocorrencias>
          <OcorrenciaList ocorrencias={ocorrencias} handleDadosOcorrencia={handleDadosOcorrencia} />
        </Ocorrencias>

      </Main>
      {showModal ? <ModalOcorrencia
        dataOcorrencia={ocorrenciaModal || {}}
        setOcorrencias={setOcorrencias}
      /> : <></>}
    </Container>
  )


}

export default Monitor