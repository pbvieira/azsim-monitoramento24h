import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import './styles.css';

function Sidebar() {
    const [showShortcuts, setShowShortcuts] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        const handleResize = () => {
            setShowShortcuts(window.innerWidth >= 1150);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <nav className=" navbar navbar-dark bg-primary fixed-top mb-5" id="navbar">
                <button className="navbar-toggler ms-3" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" data-bs-backdrop="false">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className=" offcanvas offcanvas-start text-bg-primary" data-bs-backdrop="false" tabIndex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <strong className="offcanvas-title" id="offcanvasDarkNavbarLabel">AZSIM 2.0.0</strong>

                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body" data-bs-backdrop="false">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">

                            <li className="nav-item mb-5">
                                <h2 id="titulo"><strong>Monitor</strong></h2>
                                <Link className="nav-link" id="subtitulo" aria-current="page" to="/azsim/monitor"><strong>Monitor de Eventos</strong></Link>
                                <Link className="nav-link" id="subtitulo" aria-current="page" to="/#"><strong>Consulta Atendimento</strong></Link>
                            </li>

                            <li className="nav-item mb-5">
                                <h2 id="titulo"><strong>Clientes</strong></h2>
                                <Link className="nav-link" id="subtitulo" aria-current="page" to="/azsim/cadastroCliente"><strong>Cadastro cliente</strong></Link>
                                <Link className="nav-link" id="subtitulo" aria-current="page" to="/azsim/consultaCliente"><strong>Consulta cliente</strong></Link>
                            </li>

                            <li className="nav-item mb-5">
                                <h2 id="titulo"><strong>Ordens de serviço</strong></h2>
                                <Link className="nav-link" id="subtitulo" aria-current="page" to="/azsim/cadastroOS"><strong>Cadastro OS</strong></Link>
                                <Link className="nav-link" id="subtitulo" aria-current="page" to="/#"><strong>Consulta OS</strong></Link>
                            </li>

                            <h2 id="titulo"><strong>Relatórios</strong></h2>
                            <h2 id="titulo"><strong>Administração</strong></h2>

                        </ul>
                    </div>
                </div>

                {showShortcuts && (
                    <div className="atalhos t-start">
                        <Link className="btnAtalho me-3" to="/azsim/monitor">
                            <i className="bi bi-display"> Monitor de Eventos</i>
                        </Link>

                        <Link className="btnAtalho me-3" to="/azsim/cadastroCliente">
                            <i className="bi bi-person-fill-add"> Cadastro de Clientes</i>
                        </Link>

                        <Link className="btnAtalho me-3" to="/azsim/consultaCliente">
                            <i className="bi bi-search"> Consulta de Clientes</i>
                        </Link>

                        <Link className="btnAtalho me-3" to="/azsim/cadastroOS">
                            <i className="bi bi-file-earmark-plus-fill"> Cadastro de OS</i>
                        </Link>

                        <Link className="btnAtalho me-3" to="/azsim/consultaOS">
                            <i className="bi bi-search"> Consulta de OS</i>
                        </Link>

                        <Link className="btnAtalho me-3" to="/azsim/consultaCodificador">
                            <i className="bi bi-search"> Consulta de Codificador</i>
                        </Link>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Sidebar