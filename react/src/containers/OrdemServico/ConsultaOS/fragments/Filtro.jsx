/* eslint-disable react/prop-types */
import { Input, ButtonFiltro, FiltrosDeOS } from '../styles';

function Filtro({ filtro, onChange, onSearch }) {
    return (
        <FiltrosDeOS>
            <Input
                name="input"
                value={filtro}
                onChange={onChange}
                placeholder="Ex: ..."
            />
            <ButtonFiltro
                disabled={filtro.length < 3}
                onClick={onSearch}
            >
                <span className="material-symbols-outlined">search</span>
            </ButtonFiltro>
        </FiltrosDeOS>
    );
}

export default Filtro;
