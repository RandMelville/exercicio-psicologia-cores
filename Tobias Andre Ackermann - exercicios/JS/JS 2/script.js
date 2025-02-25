// Inicia a contagem regressiva a partir de 10
let tempo = 10;
const tempoElement = document.getElementById("tempo");

const countdown = setInterval(function() {
    // Atualiza o tempo na tela
    tempoElement.innerText = tempo;

    // Quando o tempo chegar a 0
    if (tempo === 0) {
        clearInterval(countdown); // Para a contagem regressiva
        tempoElement.innerText = "O Tempo Acabou!!"; // Exibe a mensagem
        tempoElement.style.color = "green";
    } else {
        tempo--; // Decrementa o tempo
    }
}, 1000); // Irá atualizar a cada segundo