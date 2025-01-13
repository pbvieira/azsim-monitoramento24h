function ValorFiltroReq(e, setFiltro, setClientes) {
    const valor = e.target.value.toUpperCase();
    setFiltro(valor);
    if (valor === '') {
        setClientes('');
    }
}

export default ValorFiltroReq