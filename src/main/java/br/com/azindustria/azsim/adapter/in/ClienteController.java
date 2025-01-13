package br.com.azindustria.azsim.adapter.in;

import br.com.azindustria.azsim.adapter.in.vo.ClienteVO;
import br.com.azindustria.azsim.core.domain.cliente.model.Cliente;
import br.com.azindustria.azsim.core.application.in.GestaoClienteService;
import br.com.azindustria.azsim.core.mapper.ClienteMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.Objects.isNull;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    private final GestaoClienteService gestaoClienteService;

    public ClienteController(GestaoClienteService gestaoClienteService) {
        this.gestaoClienteService = gestaoClienteService;
    }

    @GetMapping
    ResponseEntity<List<ClienteVO>> listar() {
        List<ClienteVO> clienteVOS = ClienteMapper.INSTANCE.toClienteVOList(gestaoClienteService.findAll());
        if (CollectionUtils.isEmpty(clienteVOS)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(clienteVOS, HttpStatus.OK);
    }

    @GetMapping(params = {"nome"})
    ResponseEntity<List<ClienteVO>> buscarPorNome(@RequestParam String nome) {
        List<ClienteVO> clienteVOS = ClienteMapper.INSTANCE.toClienteVOList(gestaoClienteService.findByNomeOrNomeFantasia(nome));
        if (CollectionUtils.isEmpty(clienteVOS)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(clienteVOS, HttpStatus.OK);
    }

    @GetMapping("{id}")
    ResponseEntity<ClienteVO> buscarPorId(@PathVariable String id) {
        ClienteVO clienteVO = ClienteMapper.INSTANCE.toClienteVO(gestaoClienteService.findById(id));
        if (isNull(clienteVO)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(clienteVO, HttpStatus.OK);
    }

    @PostMapping
    ResponseEntity<ClienteVO> salvar(@Validated @RequestBody ClienteVO clienteVO) {
        Cliente cliente = gestaoClienteService.save(ClienteMapper.INSTANCE.toCliente(clienteVO));
        return new ResponseEntity<>(ClienteMapper.INSTANCE.toClienteVO(cliente), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    ResponseEntity<ClienteVO> deletar(@PathVariable String id) {
        Cliente cliente = gestaoClienteService.delete(id);
        if (isNull(cliente)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(ClienteMapper.INSTANCE.toClienteVO(cliente), HttpStatus.OK);
    }
}
