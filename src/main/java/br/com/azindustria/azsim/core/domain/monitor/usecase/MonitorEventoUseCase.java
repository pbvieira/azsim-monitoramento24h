package br.com.azindustria.azsim.core.domain.monitor.usecase;

import br.com.azindustria.azsim.adapter.in.vo.EventoVO;
import br.com.azindustria.azsim.adapter.in.vo.OcorrenciaVO;
import br.com.azindustria.azsim.core.domain.cliente.model.Cliente;
import br.com.azindustria.azsim.core.domain.monitor.model.ConfigEvento;
import br.com.azindustria.azsim.core.domain.monitor.model.Evento;
import br.com.azindustria.azsim.core.domain.monitor.model.Ocorrencia;
import br.com.azindustria.azsim.core.application.in.MonitorEventoService;
import br.com.azindustria.azsim.core.application.out.GestaoClienteRepository;
import br.com.azindustria.azsim.core.application.out.GestaoConfigEventoRepository;
import br.com.azindustria.azsim.core.application.out.MonitorEventoRepository;
import br.com.azindustria.azsim.core.mapper.EventoMapper;
import br.com.azindustria.azsim.core.mapper.OcorrenciaMapper;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MonitorEventoUseCase implements MonitorEventoService {

    private final SimpMessagingTemplate simpMessagingTemplate;

    private final MonitorEventoRepository monitorEventoRepository;
    private final GestaoClienteRepository gestaoClienteRepository;
    private final GestaoConfigEventoRepository gestaoConfigEventoRepository;
    private final MonitorOcorrenciaUseCase monitorOcorrenciaUseCase;

    public MonitorEventoUseCase(SimpMessagingTemplate simpMessagingTemplate, MonitorEventoRepository monitorEventoRepository, GestaoClienteRepository gestaoClienteRepository, GestaoConfigEventoRepository gestaoConfigEventoRepository, MonitorOcorrenciaUseCase monitorOcorrenciaUseCase) {
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.monitorEventoRepository = monitorEventoRepository;
        this.gestaoClienteRepository = gestaoClienteRepository;
        this.gestaoConfigEventoRepository = gestaoConfigEventoRepository;
        this.monitorOcorrenciaUseCase = monitorOcorrenciaUseCase;
    }

    @Override
    public EventoVO save(EventoVO eventoRequest) {
        Evento evento = EventoMapper.INSTANCE.toEvento(eventoRequest);
        Cliente cliente = gestaoClienteRepository.findOneByCodificador(evento.getCodificador());
        ConfigEvento configEvento = gestaoConfigEventoRepository.findByStsAndReferencia1(evento.getStatus(), evento.getReferencia());
        evento.complementarDados(cliente, configEvento);
        evento.setDatacadastro(new Date());
        evento = monitorEventoRepository.save(evento);

        EventoVO eventoResponse = EventoMapper.INSTANCE.toEventoVO(evento);
        this.simpMessagingTemplate.convertAndSend("/topic/eventos", eventoResponse);

        if (evento.isGeraOcorrencia()) {
            Ocorrencia ocorrencia = new Ocorrencia();
            ocorrencia.setEvento(evento);
            ocorrencia.setDatacadastro(new Date());

            if (!monitorOcorrenciaUseCase.ocorrenciaEmAntendimento(ocorrencia)) {
                OcorrenciaVO ocorrenciaResponse = OcorrenciaMapper.INSTANCE.toOcorrenciaVO(monitorOcorrenciaUseCase.save(ocorrencia));
                this.simpMessagingTemplate.convertAndSend("/topic/ocorrencias", ocorrenciaResponse);
            }
        }

        return eventoResponse;
    }

    public List<Evento> findTop250ByOrderByDatacadastroDesc() {
        return monitorEventoRepository.findTop250ByOrderByDatacadastroDesc();
    }


}
