package br.com.azindustria.azsim.core.domain.monitor.model;

import br.com.azindustria.azsim.core.domain.cliente.model.Cliente;
import br.com.azindustria.azsim.core.domain.cliente.model.Setor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.util.Date;

import static java.util.Objects.nonNull;

@Slf4j
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Evento {

    private Date datacadastro;

    private String unidade;

    private Integer ctx;

    private String tipoctx;

    private Integer portacom;

    private Long nrevento;

    private Integer codificador;

    private String status;

    private String referencia;

    private String destatus;

    private Date dataevento;

    private String idcliente;

    private String nmcliente;

    private Integer numsetor;

    private String local;

    private String endereco;

    private String cidade;

    private String bairro;

    private Integer alarme = 0;

    public boolean isGeraOcorrencia() {
        return alarme > 0 && nonNull(idcliente);
    }

    public void complementarDados(Cliente cliente, ConfigEvento configEvento) {
        this.destatus = "Status não localizado";
        this.nmcliente = String.format(" [codificador %s não localizado]", this.codificador);
        this.alarme = 0;
        Integer numeroSetor = null;

        if (nonNull(configEvento)) {
            if (StringUtils.hasLength(configEvento.getSetor())) {
                String setor = configEvento.getSetor().replaceAll("F", "");
                if (StringUtils.hasLength(setor)) {
                    numeroSetor = Integer.parseInt(setor, 16);
                }
            }
            this.destatus = configEvento.getDescricao();
        }

        if (nonNull(cliente)) {
            this.idcliente = cliente.getId();
            this.nmcliente = cliente.getNome();
            this.endereco = cliente.getEndereco();
            this.cidade = cliente.getCidade();
            this.bairro = cliente.getBairro();
            if (nonNull(configEvento)) {
                this.alarme = configEvento.getAlarme();
            }

            if (nonNull(cliente.getSetores()) && nonNull(numeroSetor)) {
                Integer finalNumeroSetor = numeroSetor;
                Setor setor = cliente.getSetores().stream()
                        .filter(s -> s.getSetor().equals(finalNumeroSetor))
                        .findFirst().orElse(null);

                if (nonNull(setor)) {
                    this.numsetor = numeroSetor;
                    this.local = setor.getLocalizacao();
                } else {
                    this.local = "Setor não cadastrado";
                }
            }
        }
    }
}
