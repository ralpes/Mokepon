
document.getElementById("boton-mascota").addEventListener("click", function () {
    const mascotaSeleccionada = document.querySelector('input[name="mascota"]:checked');
    if (mascotaSeleccionada) {
        alert("Has seleccionado: " + mascotaSeleccionada.id);
    } else {
        alert("Por favor selecciona una mascota.");
    }
});
document.getElementById("boton-reiniciar").addEventListener("click", function () {
    location.reload(); // Recarga la página
});