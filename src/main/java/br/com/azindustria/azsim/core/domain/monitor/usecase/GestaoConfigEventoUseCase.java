package br.com.azindustria.azsim.core.domain.monitor.usecase;

import br.com.azindustria.azsim.core.domain.monitor.model.ConfigEvento;
import br.com.azindustria.azsim.core.application.in.GestaoConfigEventoService;
import br.com.azindustria.azsim.core.application.out.GestaoConfigEventoRepository;
import org.springframework.stereotype.Service;

@Service
public class GestaoConfigEventoUseCase implements GestaoConfigEventoService {

    GestaoConfigEventoRepository gestaoConfigEventoRepository;

    @Override
    public ConfigEvento save(ConfigEvento configEvento) {
        return null;
    }
}
