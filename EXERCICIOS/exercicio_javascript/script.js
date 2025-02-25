// Alterando o conteúdo com JavaScript
function mudarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Título alterado com sucesso!";
    titulo.style.color = "green"; // Cor positiva
}

// Contagem Regressiva com Estilo
let contadorInterval;
let contador = 10;

function iniciarContagemRegressiva() {
    const contadorElement = document.getElementById("contador");

    // Limpa qualquer contagem regressiva anterior
    clearInterval(contadorInterval);

    // Reseta a contagem para 10
    contador = 10;

    // Atualiza a cor do contador para laranja no início
    contadorElement.style.color = "orange";

    contadorInterval = setInterval(function() {
        if (contador > 0) {
            contadorElement.textContent = contador;
            contador--;
        } else {
            contadorElement.textContent = "Tempo acabou!";
            contadorElement.style.color = "green"; // Cor de sucesso
            clearInterval(contadorInterval); // Para a contagem
        }
    }, 1000); // Atualiza a cada 1 segundo
}

// Validação de Formulário com Feedback Visual
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const feedback = document.getElementById("feedback");

    if (usuario === "" || senha === "") {
        feedback.textContent = "Por favor, preencha todos os campos.";
        feedback.className = "validacao erro";
    } else {
        feedback.textContent = "Login realizado com sucesso!";
        feedback.className = "validacao sucesso";
    }
}
