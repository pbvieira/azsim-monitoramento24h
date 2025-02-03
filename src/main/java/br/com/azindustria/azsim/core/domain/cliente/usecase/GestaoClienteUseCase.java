package br.com.azindustria.azsim.core.domain.cliente.usecase;

import br.com.azindustria.azsim.core.domain.cliente.model.Cliente;
import br.com.azindustria.azsim.core.application.in.GestaoClienteService;
import br.com.azindustria.azsim.core.application.out.GestaoClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GestaoClienteUseCase implements GestaoClienteService {

    GestaoClienteRepository gestaoClienteRepository;

    public GestaoClienteUseCase(GestaoClienteRepository gestaoClienteRepository) {
        this.gestaoClienteRepository = gestaoClienteRepository;
    }

    @Override
    public List<Cliente> findAll() {
        return gestaoClienteRepository.findAll();
    }

    @Override
    public Cliente findById(String id) {
        return gestaoClienteRepository.findById(id);
    }

    @Override
    public List<Cliente> findByNomeOrNomeFantasia(String nome) {
        return gestaoClienteRepository.findByNomeOrNomeFantasia(nome, nome);
    }

    @Override
    public Cliente save(Cliente cliente) {
        return gestaoClienteRepository.save(cliente);
    }

    @Override
    public Cliente delete(String id) {
        return gestaoClienteRepository.delete(id);
    }

    @Override
    public Cliente findOneByCodificadorAndUnidade(Integer codificador, String unidade) {
        return gestaoClienteRepository.findOneByCodificadorAndUnidade(codificador, unidade);
    }
}
