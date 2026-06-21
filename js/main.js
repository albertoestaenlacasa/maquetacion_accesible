console.log("Eso funciona si o si");

function showLista(){
    const elemento = document.getElementsByClassName("listas-menu")[0];
  
    console.log("mostra y ocultar el sum-menu")

    if (elemento.style.display === "none" || elemento.style.display === "") {
        elemento.style.display = "block"; // Se muestra
    } else {
        elemento.style.display = "none";  // Se oculta
    }
}