const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    titulo.textContent = "Título Alterado com Sucesso!";
    titulo.style.color = "green";
});
