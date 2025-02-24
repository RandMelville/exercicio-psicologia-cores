function mudarCor() {
    const texto = document.getElementById("texto");

    // Alternar entre azul e verde ao clicar
    if (texto.style.color === "blue") {
        texto.style.color = "green";
    } else {
        texto.style.color = "blue";
    }
}
