document.getElementById('mudarCorBtn').addEventListener('click', function () {
    var texto = document.getElementById('texto');
    if (texto.style.color === 'rgb(16, 85, 44)' || texto.style.color === '#27ae60') {
        texto.style.color = '#2980b9';
    } else {
        texto.style.color = '#27ae60';
    }
});