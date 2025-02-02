package br.com.azindustria.azsim.adapter.in;

import br.com.azindustria.azsim.adapter.in.vo.EventoVO;
import br.com.azindustria.azsim.core.domain.monitor.model.Evento;
import br.com.azindustria.azsim.core.application.in.MonitorEventoService;
import br.com.azindustria.azsim.core.mapper.EventoMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/eventos")
public class MonitorEventoController {

    private final MonitorEventoService monitorEventoService;


    public MonitorEventoController(MonitorEventoService monitorEventoService) {
        this.monitorEventoService = monitorEventoService;
    }

    @PostMapping
    ResponseEntity<EventoVO> salvar(@Validated @RequestBody EventoVO eventoVO) {
        monitorEventoService.save(eventoVO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<EventoVO>> buscarTodosEventos() {
        List<Evento> ultimosEventos = monitorEventoService.findTop250ByOrderByDatacadastroDesc();
        List<EventoVO> eventoVOs = ultimosEventos.stream()
                .map(EventoMapper.INSTANCE::toEventoVO)
                .collect(Collectors.toList());

        if (eventoVOs.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(eventoVOs, HttpStatus.OK);
    }

}


