package br.com.azindustria.azsim.adapter.out.repository;

import br.com.azindustria.azsim.adapter.out.document.OcorrenciaDocument;
import br.com.azindustria.azsim.adapter.out.repository.mongodb.JsonOcorrenciaRepository;
import br.com.azindustria.azsim.core.domain.monitor.model.Ocorrencia;
import br.com.azindustria.azsim.core.application.out.MonitorOcorrenciaRepository;
import br.com.azindustria.azsim.core.mapper.OcorrenciaMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class OcorrenciaRepository implements MonitorOcorrenciaRepository {

    JsonOcorrenciaRepository JsonOcorrenciaRepository;

    public OcorrenciaRepository(JsonOcorrenciaRepository JsonOcorrenciaRepository) {
        this.JsonOcorrenciaRepository = JsonOcorrenciaRepository;
    }

    @Override
    public List<Ocorrencia> findTop50ByOrderByDatacadastroDesc() {
        List<OcorrenciaDocument> ocorrenciaDocuments = JsonOcorrenciaRepository.findTop50ByOrderByDatacadastroDesc();
        return ocorrenciaDocuments.stream().map(OcorrenciaMapper.INSTANCE::toOcorrencia).collect(Collectors.toList());
    }

    @Override
    public Ocorrencia save(Ocorrencia ocorrencia) {
        OcorrenciaDocument ocorrenciaDocument = OcorrenciaMapper.INSTANCE.toOcorrenciaDocument(ocorrencia);
        ocorrenciaDocument = JsonOcorrenciaRepository.save(ocorrenciaDocument);
        return OcorrenciaMapper.INSTANCE.toOcorrencia(ocorrenciaDocument);
    }

    @Override
    public Ocorrencia findById(String id) {
        return OcorrenciaMapper.INSTANCE.toOcorrencia(JsonOcorrenciaRepository.findById(id).orElse(null));
    }

    @Override
    public Ocorrencia findByEventoCodificadorAndEventoStatusAndEventoReferenciaAndAberta(Integer codificador, String status, String referencia, boolean aberta) {
        return OcorrenciaMapper.INSTANCE.toOcorrencia(JsonOcorrenciaRepository.findByEventoCodificadorAndEventoStatusAndEventoReferenciaAndAberta(codificador, status, referencia, aberta));
    }
}
