package br.com.azindustria.azsim.core.application.out;

import br.com.azindustria.azsim.core.domain.cliente.exception.CodificadorEmUsoException;
import br.com.azindustria.azsim.core.domain.cliente.model.Cliente;

import java.util.List;

public interface GestaoClienteRepository {

    List<Cliente> findAll();

    Cliente findById(String id);

    List<Cliente> findByNomeOrNomeFantasia(String nome, String nomeFantasia);

    Cliente findOneByCodificadorAndUnidade(Integer codificador, String unidade);

    Cliente save(Cliente cliente) throws CodificadorEmUsoException;

    Cliente delete(String id);
}
