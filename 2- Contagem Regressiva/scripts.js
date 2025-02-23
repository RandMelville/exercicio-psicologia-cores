var contagem = 10;
var elementoContagem = document.getElementById('contagem');

var intervalo = setInterval(function() {
    contagem--;
    elementoContagem.textContent = contagem;

    if (contagem > 0 &&  contagem <= 5) {
        elementoContagem.style.color = 'red';
    }

    if (contagem <= 0) {
        clearInterval(intervalo);
        elementoContagem.textContent = 'Tempo acabou!';
        elementoContagem.style.color = 'green';
    }
}, 1000);