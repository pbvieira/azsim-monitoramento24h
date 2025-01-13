import DefaultLayout from '../layout/DefaultLayout'
import CadastroClientes from '../containers/Cliente/CadastroCliente/index'
import { Routes, Route } from 'react-router-dom'
import ConsultaCliente from '../containers/Cliente/ConsultaCliente/index'
import Monitor from '../containers/MonitorEventos/index'
import CadastroOS from '../containers/OrdemServico/CadastroOS'
import ConsultaOS from '../containers/OrdemServico/ConsultaOS'
import ConsultaCodificador from '../containers/Codificador/ConsultaCodificador'

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/azsim" element={< Monitor />} />
                <Route path="/azsim/monitor" element={< Monitor />} />
                <Route path='/azsim/cadastroOS' element={<CadastroOS />} />
                <Route path="/azsim/consultaOS" element={< ConsultaOS />} />
                <Route path="/azsim/cadastroCliente" element={<CadastroClientes />} />
                <Route path='/azsim/edicaoCliente/:id' element={<CadastroClientes />} />
                <Route path="/azsim/consultaCliente" element={< ConsultaCliente />} />
                <Route path="/azsim/consultaCodificador" element={< ConsultaCodificador />} />
            </Route>
        </Routes>
    )
}

export default Router