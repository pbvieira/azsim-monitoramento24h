package br.com.azindustria.azsim.core.application.in;

import br.com.azindustria.azsim.adapter.in.vo.EventoVO;
import br.com.azindustria.azsim.core.domain.monitor.model.Evento;

import java.util.List;

public interface MonitorEventoService {

    EventoVO save(EventoVO eventoVO);

    List<Evento> findTop250ByOrderByDatacadastroDesc();

}
