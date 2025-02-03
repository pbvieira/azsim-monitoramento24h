package br.com.azindustria.azsim.core.application.out;

import br.com.azindustria.azsim.core.domain.monitor.model.Evento;

import java.util.List;

public interface MonitorEventoRepository {

    Evento save(Evento evento);

    List<Evento> findTop200ByOrderByDatacadastroDesc();
}
