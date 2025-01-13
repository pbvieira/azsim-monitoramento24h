function SetIcon(status) {
    switch (status) {
        case "inativo":
            return (
                <span className="material-symbols-outlined" style={{ color: "#9f0000" }}>
                    close
                </span>
            );
        case "ativo":
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