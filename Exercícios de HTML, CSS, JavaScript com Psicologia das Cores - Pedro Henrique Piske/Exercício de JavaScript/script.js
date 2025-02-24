document.getElementById('colorButton').addEventListener('click', function() { 
    const greenColor = 'green'; 
    document.getElementById('titulo').style.color = greenColor; 
}); 

lista_paragrafos = ['Titulo legal','Titulo Secreto'];

const paragrafo = document.querySelector('.paragrafo');
const botao = document.querySelector('.botao');
var index = 0;

window.onload = function() {
    paragrafo.innerHTML = lista_paragrafos[index]
};

botao.addEventListener('click', () => {
    index == lista_paragrafos.length - 1 ? index = 0 : index++
    paragrafo.innerText = lista_paragrafos[index];
})

const timerElement = document.getElementById('timer');


function startCountdown() {
    let timeLeft = 10; 

   
    const interval = setInterval(() => {
        
        timerElement.textContent = timeLeft;

        
        timerElement.style.color = timeLeft <= 3 ? 'red' : 'orange';

     
        timeLeft--;

       
        if (timeLeft < 0) {
            clearInterval(interval); 
            timerElement.textContent = 'Tempo acabou!';
            timerElement.style.color = 'green'; 
        }
    }, 1000); 
}

window.onload = startCountdown;