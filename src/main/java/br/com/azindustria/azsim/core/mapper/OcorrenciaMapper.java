package br.com.azindustria.azsim.core.mapper;

import br.com.azindustria.azsim.adapter.out.document.OcorrenciaDocument;
import br.com.azindustria.azsim.adapter.in.vo.OcorrenciaVO;
import br.com.azindustria.azsim.core.domain.monitor.model.Ocorrencia;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface OcorrenciaMapper {

    OcorrenciaMapper INSTANCE = Mappers.getMapper(OcorrenciaMapper.class);

    OcorrenciaDocument toOcorrenciaDocument(Ocorrencia ocorrencia);

    Ocorrencia toOcorrencia(OcorrenciaDocument ocorrenciaDocument);

    Ocorrencia toOcorrencia(OcorrenciaVO ocorrenciaVO);

    OcorrenciaVO toOcorrenciaVO(Ocorrencia ocorrencia);
}
