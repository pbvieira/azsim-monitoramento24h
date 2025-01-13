package br.com.azindustria.azsim.adapter.out.repository.mongodb;

import br.com.azindustria.azsim.adapter.out.document.ConfigEventoDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JsonConfigEventoRepository extends MongoRepository<ConfigEventoDocument, String> {

    ConfigEventoDocument findByStsAndReferencia1(String status, String referencia1);
}
