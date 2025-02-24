let tempo = 10; // Tempo inicial
let timerElement = document.getElementById("timer");

// Função que executa a contagem regressiva
function contar() {
    if (tempo > 0) {
        tempo--;
        timerElement.textContent = tempo;

        // Se o tempo for menor que 5, muda para laranja
        if (tempo <= 5) {
            timerElement.style.color = "#ff9800"; // Laranja
        }
    } else {
        // Quando chega a 0, exibe a mensagem e muda a cor
        timerElement.textContent = "Tempo acabou!";
        timerElement.style.color = "#388e3c"; // Verde (conclusão)
        clearInterval(intervalo); // Para o temporizador
    }
}

// Inicia a contagem regressiva a cada segundo
let intervalo = setInterval(contar, 1000);
