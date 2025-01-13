package br.com.azindustria.azsim.core.domain.monitor.usecase;

import br.com.azindustria.azsim.core.domain.monitor.model.Ocorrencia;
import br.com.azindustria.azsim.core.application.in.MonitorOcorrenciaService;
import br.com.azindustria.azsim.core.application.out.MonitorOcorrenciaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonitorOcorrenciaUseCase implements MonitorOcorrenciaService {

    MonitorOcorrenciaRepository monitorOcorrenciaRepository;

    public MonitorOcorrenciaUseCase(MonitorOcorrenciaRepository monitorOcorrenciaRepository) {
        this.monitorOcorrenciaRepository = monitorOcorrenciaRepository;
    }

    @Override
    public Ocorrencia findById(String id) {
        return monitorOcorrenciaRepository.findById(id);
    }

    public List<Ocorrencia> findTop50ByOrderByDatacadastroDesc() {
        return monitorOcorrenciaRepository.findTop50ByOrderByDatacadastroDesc();
    }

    @Override
    public Ocorrencia save(Ocorrencia ocorrencia) {
        return monitorOcorrenciaRepository.save(ocorrencia);
    }
}
