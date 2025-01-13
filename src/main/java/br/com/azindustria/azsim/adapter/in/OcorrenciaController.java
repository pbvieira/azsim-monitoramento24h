package br.com.azindustria.azsim.adapter.in;

import br.com.azindustria.azsim.adapter.in.vo.OcorrenciaVO;
import br.com.azindustria.azsim.core.domain.monitor.model.Ocorrencia;
import br.com.azindustria.azsim.core.application.in.MonitorOcorrenciaService;
import br.com.azindustria.azsim.core.mapper.OcorrenciaMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.Objects.isNull;

@RestController
@RequestMapping("/ocorrencias")
public class OcorrenciaController {

    private final MonitorOcorrenciaService monitorOcorrenciaService;

    public OcorrenciaController(MonitorOcorrenciaService monitorOcorrenciaService) {
        this.monitorOcorrenciaService = monitorOcorrenciaService;
    }

    @PostMapping
    public ResponseEntity<OcorrenciaVO> salvar(@Validated @RequestBody OcorrenciaVO ocorrenciaRequest) {
        Ocorrencia ocorrencia = monitorOcorrenciaService.save(OcorrenciaMapper.INSTANCE.toOcorrencia(ocorrenciaRequest));
        OcorrenciaVO ocorrenciaResponse = OcorrenciaMapper.INSTANCE.toOcorrenciaVO(ocorrencia);
        return new ResponseEntity<>(ocorrenciaResponse, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<OcorrenciaVO> buscarPorId(@PathVariable String id) {
        OcorrenciaVO ocorrenciaVO = OcorrenciaMapper.INSTANCE.toOcorrenciaVO(monitorOcorrenciaService.findById(id));
        if (isNull(ocorrenciaVO)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ocorrenciaVO, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<OcorrenciaVO>> buscarOcorrenciasAbertas() {
        List<Ocorrencia> todasOcorrencias = monitorOcorrenciaService.findTop50ByOrderByDatacadastroDesc();

        List<OcorrenciaVO> abertas = todasOcorrencias.stream()
                .filter(ocorrencia -> ocorrencia.isAberta())
                .map(ocorrencia -> OcorrenciaMapper.INSTANCE.toOcorrenciaVO(ocorrencia))
                .collect(Collectors.toList());

        if (abertas.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(abertas, HttpStatus.OK);
    }
}
