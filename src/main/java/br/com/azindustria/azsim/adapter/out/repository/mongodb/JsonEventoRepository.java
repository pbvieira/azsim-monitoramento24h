package br.com.azindustria.azsim.adapter.out.repository.mongodb;

import br.com.azindustria.azsim.adapter.out.document.EventoDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JsonEventoRepository extends MongoRepository<EventoDocument, String> {

    List<EventoDocument> findFirst200ByOrderByDatacadastroDesc();
}
