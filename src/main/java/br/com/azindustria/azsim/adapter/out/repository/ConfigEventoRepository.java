package br.com.azindustria.azsim.adapter.out.repository;

import br.com.azindustria.azsim.adapter.out.document.ConfigEventoDocument;
import br.com.azindustria.azsim.adapter.out.repository.mongodb.JsonConfigEventoRepository;
import br.com.azindustria.azsim.core.domain.monitor.model.ConfigEvento;
import br.com.azindustria.azsim.core.application.out.GestaoConfigEventoRepository;
import br.com.azindustria.azsim.core.mapper.ConfigEventoMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ConfigEventoRepository implements GestaoConfigEventoRepository {

    JsonConfigEventoRepository JsonConfigEventoRepository;

    public ConfigEventoRepository(JsonConfigEventoRepository JsonConfigEventoRepository) {
        this.JsonConfigEventoRepository = JsonConfigEventoRepository;
    }

    @Override
    public ConfigEvento findByStsAndReferencia1(String status, String referencia1) {
        return ConfigEventoMapper.INSTANCE.toConfigEvento(JsonConfigEventoRepository.findByStsAndReferencia1(status, referencia1));
    }

    @Override
    public List<ConfigEvento> findAll() {
        return null;
    }

    @Override
    public ConfigEvento findById(String id) {
        return null;
    }

    @Override
    public ConfigEvento save(ConfigEvento configEvento) {
        ConfigEventoDocument configEventoDocument = ConfigEventoMapper.INSTANCE.toConfigEventoDocument(configEvento);
        configEventoDocument = JsonConfigEventoRepository.save(configEventoDocument);
        return ConfigEventoMapper.INSTANCE.toConfigEvento(configEventoDocument);
    }
}
