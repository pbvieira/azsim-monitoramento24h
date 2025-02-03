package br.com.azindustria.azsim.adapter.out.repository.mongodb;

import br.com.azindustria.azsim.adapter.out.document.ClienteDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JsonClienteRepository extends MongoRepository<ClienteDocument, String> {

    List<ClienteDocument> findAllByAtivo(boolean ativo);

    ClienteDocument findOneByCodificadorAndUnidade(Integer codificador, String unidade);

    List<ClienteDocument> findByNomeLikeOrNomeFantasiaLikeAndAtivo(String nome, String nomeFantasia, boolean ativo);
}
