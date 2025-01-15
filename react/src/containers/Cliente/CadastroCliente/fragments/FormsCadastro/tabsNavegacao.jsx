import PropTypes from "prop-types";
import { Tabs } from "./styles";

function TabsNavigation({ setTabSelected }) {

    function MudaValue(value) {
        setTabSelected(value)
    }

    return (
        <Tabs>
            <ul className="nav nav-tabs text-center mt-3 ms-2 justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" onClick={() => MudaValue('')} id="dadosBasicos-tab" data-bs-toggle="tab"
                        data-bs-target="#dadosBasicos" type="button" role="tab" aria-controls="dadosBasicos"
                        aria-selected="true">Dados Básicos
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" onClick={() => MudaValue('contatos')} id="contatos-tab" data-bs-toggle="tab"
                        data-bs-target="#contatos" type="button" role="tab" aria-controls="contatos"
                        aria-selected="false">Contatos
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" onClick={() => MudaValue('setores')} id="setorizacao-tab" data-bs-toggle="tab"
                        data-bs-target="#setorizacao" type="button" role="tab" aria-controls="setorizacao"
                        aria-selected="false">Setorização
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" onClick={() => MudaValue('viagens')} id="viagens-tab" data-bs-toggle="tab"
                        data-bs-target="#viagens" type="button" role="tab" aria-controls="viagens"
                        aria-selected="false">Viagens
                    </button>
                </li>
            </ul>
        </Tabs>
    );
}

TabsNavigation.propTypes = {
    setTabSelected: PropTypes.func.isRequired,
};

export default TabsNavigation;
