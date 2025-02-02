package br.com.azindustria.azsim.core.domain.monitor.usecase;

import br.com.azindustria.azsim.core.domain.monitor.model.Ocorrencia;
import br.com.azindustria.azsim.core.application.in.MonitorOcorrenciaService;
import br.com.azindustria.azsim.core.application.out.MonitorOcorrenciaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

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

    @Override
    public boolean ocorrenciaEmAntendimento(Ocorrencia ocorrencia) {
        Ocorrencia ocorrenciaPai = null;

        if (Objects.isNull(ocorrencia.getId())) {
            ocorrenciaPai = monitorOcorrenciaRepository.findByEventoCodificadorAndEventoStatusAndEventoReferenciaAndAberta(
                    ocorrencia.getEvento().getCodificador(),
                    ocorrencia.getEvento().getStatus(),
                    ocorrencia.getEvento().getReferencia(),
                    true);
        }

        if (Objects.isNull(ocorrenciaPai)) {
            return false;
        }

        return true;
    }
}
