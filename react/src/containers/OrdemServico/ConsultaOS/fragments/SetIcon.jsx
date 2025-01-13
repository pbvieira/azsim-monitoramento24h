
function SetIcon(status) {
    switch (status) {
        case "Pendente":
            return (
                <span className="material-symbols-outlined" style={{ color: "#9f0000" }}>
                    remove_done
                </span>
            );
        case "Em andamento":
            return (
                <span style={{ color: 'gray' }} className="material-symbols-outlined">
                    check_indeterminate_small
                </span>
            );
        case "Finalizado":
            return (
                <span style={{ color: 'green' }} className="material-symbols-outlined" >
                    check_small
                </span >
            );
        default:
            return (
                <span className="material-symbols-outlined" style={{ color: "gray" }}>
                    info
                </span>
            );
    }
}

export default SetIcon