package br.com.azindustria.azsim.adapter.out.repository;

import br.com.azindustria.azsim.adapter.out.document.ClienteDocument;
import br.com.azindustria.azsim.adapter.out.repository.mongodb.JsonClienteRepository;
import br.com.azindustria.azsim.core.domain.cliente.exception.CodificadorEmUsoException;
import br.com.azindustria.azsim.core.domain.cliente.model.Cliente;
import br.com.azindustria.azsim.core.application.out.GestaoClienteRepository;
import br.com.azindustria.azsim.core.mapper.ClienteMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

@Repository
public class ClienteRepository implements GestaoClienteRepository {

    JsonClienteRepository JsonClienteRepository;

    public ClienteRepository(JsonClienteRepository JsonClienteRepository) {
        this.JsonClienteRepository = JsonClienteRepository;
    }

    @Override
    public List<Cliente> findAll() {
        List<ClienteDocument> clienteDocuments = JsonClienteRepository.findAllByAtivo(true);
        return clienteDocuments.stream().map(ClienteMapper.INSTANCE::toCliente).collect(Collectors.toList());
    }

    @Override
    public Cliente findById(String id) {
        return ClienteMapper.INSTANCE.toCliente(JsonClienteRepository.findById(id).orElse(null));
    }

    @Override
    public List<Cliente> findByNomeOrNomeFantasia(String nome, String nomeFantasia) {
        List<ClienteDocument> clienteDocuments = JsonClienteRepository.findByNomeLikeOrNomeFantasiaLikeAndAtivo(nome, nomeFantasia, true);
        return clienteDocuments.stream().map(ClienteMapper.INSTANCE::toCliente).collect(Collectors.toList());
    }

    @Override
    public Cliente findOneByCodificadorAndUnidade(Integer codificador, String unidade) {
        if (Objects.isNull(codificador)) {
            return new Cliente();
        }
        return ClienteMapper.INSTANCE.toCliente(JsonClienteRepository.findOneByCodificadorAndUnidade(codificador, unidade));
    }

    @Override
    public Cliente save(Cliente cliente) {
        ClienteDocument clienteDocument = ClienteMapper.INSTANCE.toClienteDocument(cliente);
        ClienteDocument clienteExistente = null;

        if (nonNull(clienteDocument.getCodificador())) {
            clienteExistente = JsonClienteRepository.findOneByCodificadorAndUnidade(clienteDocument.getCodificador(), cliente.getUnidade());
        }

        if (nonNull(clienteExistente) && !clienteExistente.getId().equals(clienteDocument.getId())) {
            throw new CodificadorEmUsoException(String.format("Codificador %s já está em uso no cliente %s", clienteExistente.getCodificador(), clienteExistente.getNome()));
        }

        clienteDocument = JsonClienteRepository.save(clienteDocument);
        return ClienteMapper.INSTANCE.toCliente(clienteDocument);
    }

    @Override
    public Cliente delete(String id) {
        ClienteDocument clienteDocument = JsonClienteRepository.findById(id).orElse(null);
        if (isNull(clienteDocument)){
            return null;
        }

        clienteDocument.setAtivo(false);
        clienteDocument = JsonClienteRepository.save(clienteDocument);
        return ClienteMapper.INSTANCE.toCliente(clienteDocument);
    }
}
