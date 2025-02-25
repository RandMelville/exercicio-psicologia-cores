const texto = document.getElementById("texto");
const botao = document.getElementById("mudarCor");

botao.addEventListener("click", function() {
    if (texto.style.color === "green") {
        texto.style.color = "black";
    } else {
        texto.style.color = "green";
    }
});