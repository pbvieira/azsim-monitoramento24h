package br.com.azindustria.azsim.adapter.out.document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "ocorrencia")
public class OcorrenciaDocument {

    @Id
    private String id;

    private String idocorrenciapai;

    private EventoDocument evento;

    private Date datacadastro;

    private Date dataatendimento;

    private Date dataencerramento;

    private String idagente;

    private String agente;

    private String operador;

    private String idoperadorabertura;

    private String idoperadorfechamento;

    private Date horasaidaemp;

    private Date horasaidacliente;

    private Date horaaberturalacre;

    private Integer kmsaida;

    private Integer kmretorno;

    private Integer kmtotalpercorrido;

    private Date horachegadaemp;

    private Date horachegadacliente;

    private boolean deslocamento;

    private Date tempodeslocamento;

    private Date temporetorno;

    private Date tempoatendimento;

    private String lacre;

    private String resumo;

    private String tipoocorrencia;

    private String subtipoocorrencia;

    private boolean ocorrenciapolicial;

    private String ocorrenciapolicialresumo;

    private String idordemservico;

    private boolean aberta = true;

}
