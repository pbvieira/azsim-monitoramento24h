package br.com.azindustria.azsim.core.mapper;

import br.com.azindustria.azsim.adapter.out.document.EventoDocument;
import br.com.azindustria.azsim.adapter.in.vo.EventoVO;
import br.com.azindustria.azsim.core.domain.monitor.model.Evento;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Component
@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface EventoMapper {

    EventoMapper INSTANCE = Mappers.getMapper(EventoMapper.class);

    EventoDocument toEventoDocument(Evento evento);

    Evento toEvento(EventoDocument eventoDocument);

    Evento toEvento(EventoVO eventoVO);

    EventoVO toEventoVO(Evento evento);
}
