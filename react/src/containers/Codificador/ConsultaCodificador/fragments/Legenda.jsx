import { Legenda } from "../styles"

function LegendaIcon() {
    return (
        <Legenda>
            <div><span>Ativo - </span><span style={{ color: 'green' }} className="material-symbols-outlined" >
                check_small
            </span ></div>
            <div><span>Inativo - </span><span className="material-symbols-outlined" style={{ color: "#9f0000" }}>
                close
            </span></div>
        </Legenda>
    )
}

export default LegendaIcon