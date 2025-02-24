document.getElementById("botao").addEventListener("click", function () {
    let texto = document.getElementById("texto");

    // Alternar entre duas cores
    if (texto.style.color === "green") {
        texto.style.color = "blue";
    } else {
        texto.style.color = "green";
    }
});
