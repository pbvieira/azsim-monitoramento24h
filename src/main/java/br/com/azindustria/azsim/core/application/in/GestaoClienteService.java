package br.com.azindustria.azsim.core.application.in;


import br.com.azindustria.azsim.core.domain.cliente.model.Cliente;

import java.util.List;

public interface GestaoClienteService {

    List<Cliente> findAll();

    Cliente findById(String id);

    List<Cliente> findByNomeOrNomeFantasia(String nome);

    Cliente save(Cliente cliente);

    Cliente delete(String id);

    Cliente findOneByCodificador(Integer codificador);
}
