document.addEventListener("DOMContentLoaded", function() {
    const fotos = document.querySelectorAll(".foto");
    let indiceActual = 0;

    // Muestra la primera foto
    fotos[indiceActual].style.display = "block";

    // Agrega un evento de clic para cambiar la foto
    document.addEventListener("click", function() {
        // Oculta la foto actual
        fotos[indiceActual].style.display = "none";

        // Incrementa el índice para mostrar la siguiente foto
        indiceActual++;

        // Si llegamos al final, volvemos al principio
        if (indiceActual === fotos.length) {
            indiceActual = 0;
        }

        // Muestra la siguiente foto
        fotos[indiceActual].style.display = "block";
    });
});


function desliza(){
    Swal.fire({
        title: 'Amorcito',
        html: '<div style="overflow-y: scroll; max-height: 200px;">' +
            'Tienes que deslizar en las fotos para ver más :3...' +
            '</div>',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Bueno amorcito',
        cancelButtonText: 'Sí, ah bueno'
    });
    

}