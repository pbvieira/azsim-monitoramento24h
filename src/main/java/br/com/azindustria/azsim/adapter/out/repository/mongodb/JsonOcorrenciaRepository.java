package br.com.azindustria.azsim.adapter.out.repository.mongodb;

import br.com.azindustria.azsim.adapter.out.document.OcorrenciaDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JsonOcorrenciaRepository extends MongoRepository<OcorrenciaDocument, String> {

    List<OcorrenciaDocument> findTop50ByOrderByDatacadastroDesc();
}
