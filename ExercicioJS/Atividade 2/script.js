// Seleciona o elemento do contador
const timerElement = document.getElementById("timer");

// Define o tempo inicial
let tempo = 10;

// Inicia a contagem regressiva
const interval = setInterval(() => {
    // Atualiza o texto do contador
    timerElement.textContent = tempo;

    // Muda para laranja quando estiver próximo do fim
    if(tempo =>5){
        timerElement.style.color = "blue";
    }
    if (tempo <= 5) {
        timerElement.style.color = "orange";
    }
    if(tempo <=3){
        timerElement.style.color = "red";
    }

    // Se o tempo acabar, exibe a mensagem e para o contador
    if (tempo === 0) {
        clearInterval(interval);
        timerElement.textContent = "Tempo acabou!";
        timerElement.style.color = "green"; // Verde para indicar sucesso
    }

    // Decrementa o tempo
    tempo--;
}, 1000);
