//  Alterando o conteúdo com JavaScript
document.getElementById('botao-titulo').addEventListener('click', function() {
    document.getElementById('titulo').innerText = 'Título Alterado!';
    document.getElementById('titulo').style.color = 'green';
});

// Contagem Regressiva com Estilo
let contador = 10;
const contadorElemento = document.getElementById('contador');

const timer = setInterval(function() {
    if (contador > 0) {
        contadorElemento.textContent = contador--;
    } else {
        contadorElemento.textContent = "Tempo Acabou!";
        contadorElemento.style.color = "green";
        clearInterval(timer);
    }
}, 1000);

// Validação de Formulário com Feedback Visual
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');
    const mensagemErro = document.getElementById('mensagemErro');

    if (usuario.value === "" || senha.value === "") {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        usuario.style.borderColor = "red";
        senha.style.borderColor = "red";
    } else {
        mensagemErro.textContent = "";
        usuario.style.borderColor = "green";
        senha.style.borderColor = "green";
    }
});

// Página Interativa de Tarefas
document.getElementById('adicionar-tarefa').addEventListener('click', function() {
    const tarefaTexto = document.getElementById('nova-tarefa').value;
    if (tarefaTexto.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = tarefaTexto;
        document.getElementById('lista-tarefas').appendChild(li);
        document.getElementById('nova-tarefa').value = ""; // Limpa o campo
    }
});

// Mudança de Cor ao Clicar
document.getElementById("mudar-cor").addEventListener("click", function () {
    let corSelecionada = document.getElementById("seletor-cor").value;
    document.getElementById("texto").style.color = corSelecionada;
});

