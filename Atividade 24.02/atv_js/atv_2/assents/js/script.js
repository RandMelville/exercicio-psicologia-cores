const contador = document.getElementById("contador");
const botao = document.getElementById("iniciar");

botao.addEventListener("click", function() {
    let tempo = 10;
    contador.textContent = tempo;
    contador.style.color = "red";

    const intervalo = setInterval(function() {
        tempo--;
        contador.textContent = tempo;

        if (tempo > 5) {
            contador.style.color = "red";
        } else if (tempo > 0) {
            contador.style.color = "orange";
        } else {
            clearInterval(intervalo);
            contador.textContent = "Tempo acabou!";
            contador.style.color = "green";
        }
    }, 1000);
});