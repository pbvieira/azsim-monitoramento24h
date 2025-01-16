import { Container, Fundo, Formulario, Row, Input } from "../../../components/Formularios/Form";
import HeaderPage from "../../../components/HeaderPages";
import { TabContent } from "../../Cliente/CadastroCliente/fragments/FormsCadastro/styles";
import FormButtons from "./components/formButtonsCadastroOs";



function CadastroOS() {

    return (
        <Container>
            <HeaderPage title="Cadastro de OS" subtitle={'Cadastre e edite suas Ordens de Serviço'} location={'Home > Cadastro de OS'} />
            <Fundo>
                <Formulario>
                    <TabContent>
                        <Row>
                            <Input type="text" className="form-control" placeholder='Num OS Cliente' />
                            <Input type="text" className="form-control" placeholder='Data Hora Abertura' />
                            <Input type="text" className="form-control" placeholder='Operador(a) Abertura OS' />
                        </Row>
                        <Row>
                            <Input type="text" className="form-control" placeholder='Num do Cliente' />
                            <Input type="text" className="form-control" placeholder='' />
                        </Row>
                        <Row>
                            <Input type="text" className="form-control" placeholder='Endereço de monitoramento' />
                            <Input type="text" className="form-control" placeholder='Bairro' />
                        </Row>
                        <Row>
                            <Input type="text" className="form-control" placeholder='Cidade' />
                            <Input type="text" className="form-control" placeholder='UF' />
                            <Input type="text" className="form-control" placeholder='CEP' />
                        </Row>
                        <Row>
                            <textarea rows={6} type="text" className="form-control" placeholder='Ordem de Serviço' />
                        </Row>
                        <Row>
                            <textarea rows={6} type="text" className="form-control" placeholder='Obs Técnico' />
                        </Row>
                        <Row><h5>Dados do encerramento</h5></Row>
                        <Row>
                            <Input type="text" className="form-control" placeholder='Operador(a) Encerramento' />
                            <Input type="text" className="form-control" placeholder='Técnico Responsável' />
                        </Row>
                        <Row>
                            <Input type="text" className="form-control" placeholder='Data Execução' />
                            <Input type="text" className="form-control" placeholder='Início' />
                            <Input type="text" className="form-control" placeholder='Término' />
                        </Row>
                    </TabContent>
                </Formulario>
                <FormButtons />
            </Fundo>
        </Container >
    );


}
export default CadastroOS;