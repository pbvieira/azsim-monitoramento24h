package br.com.azindustria.azsim.core.domain.monitor.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ConfigEvento {

    private String id;

    private String sts;

    private String referencia1;

    private String referencia2;

    private String setor;

    private String grupo;

    private Integer alarme;

    private Integer mensagem;

    private Integer monitor;

    private Integer identificacao;

    private Integer ocorrencia;

    private String descricao;

    private String cor;

}
