package br.com.azindustria.azsim.adapter.out.repository;

import br.com.azindustria.azsim.adapter.out.document.EventoDocument;
import br.com.azindustria.azsim.adapter.out.repository.mongodb.JsonEventoRepository;
import br.com.azindustria.azsim.core.domain.monitor.model.Evento;
import br.com.azindustria.azsim.core.application.out.MonitorEventoRepository;
import br.com.azindustria.azsim.core.mapper.EventoMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class EventoRepository implements MonitorEventoRepository {

    JsonEventoRepository JsonEventoRepository;

    public EventoRepository(JsonEventoRepository JsonEventoRepository) {
        this.JsonEventoRepository = JsonEventoRepository;
    }

    @Override
    public Evento save(Evento evento) {
        EventoDocument eventoDocument = EventoMapper.INSTANCE.toEventoDocument(evento);
        eventoDocument = JsonEventoRepository.save(eventoDocument);
        return EventoMapper.INSTANCE.toEvento(eventoDocument);
    }

    @Override
    public List<Evento> findTop250ByOrderByDataeventoDesc() {
        List<EventoDocument> eventoDocuments = JsonEventoRepository.findFirst250ByOrderByDataeventoDesc();
        return eventoDocuments.stream().map(EventoMapper.INSTANCE::toEvento).collect(Collectors.toList());
    }

}
