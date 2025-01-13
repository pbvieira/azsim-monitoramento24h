package br.com.azindustria.azsim.core.mapper;

import br.com.azindustria.azsim.adapter.out.document.ConfigEventoDocument;
import br.com.azindustria.azsim.core.domain.monitor.model.ConfigEvento;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ConfigEventoMapper {

    ConfigEventoMapper INSTANCE = Mappers.getMapper(ConfigEventoMapper.class);

    ConfigEventoDocument toConfigEventoDocument(ConfigEvento configEvento);

    ConfigEvento toConfigEvento(ConfigEventoDocument configEventoDocument);

}
