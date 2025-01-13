package br.com.azindustria.azsim.core.application.in;

import br.com.azindustria.azsim.core.domain.monitor.model.Ocorrencia;

import java.util.List;

public interface MonitorOcorrenciaService {

    Ocorrencia save(Ocorrencia ocorrencia);

    Ocorrencia findById(String id);

    List<Ocorrencia> findTop50ByOrderByDatacadastroDesc();

}
