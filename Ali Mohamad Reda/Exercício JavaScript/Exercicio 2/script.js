var contador = 10;
var contadorDiv = document.getElementById('contador');

var intervalo = setInterval(function () {
    contadorDiv.textContent = contador;
    contador--;
    if (contador < 0) {
        clearInterval(intervalo);
        contadorDiv.textContent = "Tempo acabou!";
        contadorDiv.style.color = "#27ae60";
    }
}, 1000);