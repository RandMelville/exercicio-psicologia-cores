// Exercício 1 - Alterando o conteúdo com JavaScript
function mudarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Título Alterado!";
    titulo.style.color = "green"; // Cor verde para algo positivo
}

// Exercício 2 - Contagem Regressiva com Estilo
let contador = 10;
let interval;

function iniciarContagem() {
    const contadorElemento = document.getElementById("contador");
    interval = setInterval(function() {
        if (contador >= 0) {
            contadorElemento.textContent = contador;
            contadorElemento.style.color = "orange"; // Laranja para urgência
            contador--;
        } else {
            clearInterval(interval);
            contadorElemento.textContent = "Tempo Acabou!";
            contadorElemento.style.color = "green"; // Verde para sucesso ou conclusão
        }
    }, 1000); // Atualiza a contagem a cada 1 segundo
}

// Exercício 3 - Validação de Formulário com Feedback Visual
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const usuario = document.getElementById("usuario");
    const senha = document.getElementById("senha");
    const mensagemErro = document.getElementById("mensagemErro");

    // Validação dos campos
    let valido = true;

    if (usuario.value === "") {
        usuario.classList.add("invalid");
        valido = false;
    } else {
        usuario.classList.remove("invalid");
        usuario.classList.add("valid");
    }

    if (senha.value === "") {
        senha.classList.add("invalid");
        valido = false;
    } else {
        senha.classList.remove("invalid");
        senha.classList.add("valid");
    }

    // Exibe a mensagem de erro caso algum campo esteja vazio
    if (!valido) {
        mensagemErro.textContent = "Por favor, preencha todos os campos!";
    } else {
        mensagemErro.textContent = "";
        alert("Formulário enviado com sucesso!");
        // Aqui você pode adicionar o código para enviar o formulário
    }
}
