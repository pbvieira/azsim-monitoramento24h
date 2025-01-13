import Swal from 'sweetalert2';

export const exibirAlerta = (titulo, texto, tipo) => {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: tipo,
        showCancelButton: tipo === 'question',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
    });
};
