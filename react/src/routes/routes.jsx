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
                <Route path="/" element={< ConsultaCliente />} />
                <Route path="/monitor" element={< Monitor />} />
                <Route path='/cadastroOS' element={<CadastroOS />} />
                <Route path="/consultaOS" element={< ConsultaOS />} />
                <Route path="/cadastroCliente" element={<CadastroClientes />} />
                <Route path='/edicaoCliente/:id' element={<CadastroClientes />} />
                <Route path="/consultaCliente" element={< ConsultaCliente />} />
                <Route path="/consultaCodificador" element={< ConsultaCodificador />} />
            </Route>
        </Routes>
    )
}

export default Router