function mudarTitulo() {
    let titulo = document.getElementById("titulo");

    // Mudando o texto
    titulo.textContent = "O título foi alterado!";

    // Escolhendo uma cor aleatória entre verde (positivo) e azul (tranquilo)
    let cores = ["#388e3c", "#1976d2"]; // Verde e azul
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    titulo.style.color = corAleatoria;
}
