package br.com.azindustria.azsim.adapter.web.monitor;

import br.com.azindustria.azsim.adapter.web.valueobject.EventoVO;
import br.com.azindustria.azsim.core.domain.monitoramento.model.Evento;
import br.com.azindustria.azsim.core.port.in.MonitorEventoPort;
import br.com.azindustria.azsim.mapper.EventoMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/evento")
public class MonitorEventoController {

    private final MonitorEventoPort monitorEventoPort;


    public MonitorEventoController(MonitorEventoPort monitorEventoPort) {
        this.monitorEventoPort = monitorEventoPort;
    }

    @PostMapping
    ResponseEntity<EventoVO> salvar(@Validated @RequestBody EventoVO eventoVO) {
        monitorEventoPort.save(eventoVO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<EventoVO>> buscarTodosEventos() {
        List<Evento> ultimosEventos = monitorEventoPort.findTop250ByOrderByDataeventoDesc();
        List<EventoVO> eventoVOs = ultimosEventos.stream()
                .map(EventoMapper.INSTANCE::toEventoVO)
                .collect(Collectors.toList());

        if (eventoVOs.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(eventoVOs, HttpStatus.OK);
    }

}


