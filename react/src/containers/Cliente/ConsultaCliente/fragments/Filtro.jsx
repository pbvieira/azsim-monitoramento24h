/* eslint-disable react/prop-types */
import { Input, ButtonFiltro, FiltrosDeClientes } from '../styles';

function Filtro({ filtro, onChange, onSearch }) {
    return (
        <FiltrosDeClientes>
            <Input
                name="input"
                value={filtro}
                onChange={onChange}
                placeholder="Ex: João da Silva..."
            />
            <ButtonFiltro
                disabled={filtro.length < 3}
                onClick={onSearch}
            >
                <span className="material-symbols-outlined">search</span>
            </ButtonFiltro>
        </FiltrosDeClientes>
    );
}

export default Filtro;
