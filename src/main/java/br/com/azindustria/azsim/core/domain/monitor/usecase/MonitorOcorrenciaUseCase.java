package br.com.azindustria.azsim.core.domain.monitor.usecase;

import br.com.azindustria.azsim.core.domain.monitor.model.Ocorrencia;
import br.com.azindustria.azsim.core.application.in.MonitorOcorrenciaService;
import br.com.azindustria.azsim.core.application.out.MonitorOcorrenciaRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
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
        Ocorrencia ocorrencia = monitorOcorrenciaRepository.findById(id);
        if (Objects.isNull(ocorrencia.getDataatendimento())) {
            ocorrencia.setDataatendimento(new Date());
            return save(ocorrencia);
        }
        return ocorrencia;
    }

    public List<Ocorrencia> findTop50ByOrderByDatacadastroDesc() {
        return monitorOcorrenciaRepository.findTop50ByOrderByDatacadastroDesc();
    }

    @Override
    public Ocorrencia save(Ocorrencia ocorrencia) {
        if (Objects.isNull(ocorrencia.getDatacadastro())) {
            ocorrencia.setDatacadastro(new Date());
        }

        if (!ocorrencia.isAberta() && Objects.isNull(ocorrencia.getDataencerramento())) {
            ocorrencia.setDataencerramento(new Date());
        }
        return monitorOcorrenciaRepository.save(ocorrencia);
    }

    @Override
    public boolean ocorrenciaEmAntendimento(Ocorrencia ocorrencia) {
        Ocorrencia ocorrenciaPai = null;

        if (Objects.isNull(ocorrencia.getId())) {
            ocorrenciaPai = monitorOcorrenciaRepository.findByEventoCodificadorAndEventoStatusAndAberta(
                    ocorrencia.getEvento().getCodificador(),
                    ocorrencia.getEvento().getStatus(),
                    true);
        }

        if (Objects.isNull(ocorrenciaPai)) {
            return false;
        }

        return true;
    }
}
