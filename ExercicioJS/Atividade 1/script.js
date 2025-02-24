// Seleciona os elementos do HTML
const titulo = document.getElementById("titulo");
const botao = document.getElementById("btn");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", function() {
    // Define um novo texto para o título
    titulo.textContent = "Título Alterado com Sucesso!";

    // Escolhe uma cor para transmitir emoção
    titulo.style.color = "green"; // Verde para algo positivo
});
