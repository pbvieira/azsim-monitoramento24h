import { Legenda } from "../styles"

function LegendaIcon() {
    return (
        <Legenda>
            <div><span>Finalizado - </span><span style={{ color: 'green' }} className="material-symbols-outlined" >
                check_small
            </span ></div>
            <div><span>Pendente - </span><span style={{ color: 'gray' }} className="material-symbols-outlined">
                check_indeterminate_small
            </span></div>
            <div><span>Não Iniciado - </span><span className="material-symbols-outlined" style={{ color: "#9f0000" }}>
                remove_done
            </span></div>
        </Legenda>
    )
}

export default LegendaIcon