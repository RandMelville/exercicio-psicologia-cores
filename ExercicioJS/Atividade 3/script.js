// Seleciona os elementos do formulário
const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");

// Função para exibir erro
function mostrarErro(input, mensagem) {
    const small = input.nextElementSibling;
    small.textContent = mensagem;
    small.style.display = "block";
    input.classList.add("erro");
    input.classList.remove("sucesso");
}

// Função para exibir sucesso
function mostrarSucesso(input) {
    const small = input.nextElementSibling;
    small.style.display = "none";
    input.classList.add("sucesso");
    input.classList.remove("erro");
}

// Validação ao submeter o formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let valido = true;

    if (usuario.value.trim() === "") {
        mostrarErro(usuario, "O usuário é obrigatório.");
        valido = false;
    } else {
        mostrarSucesso(usuario);
    }

    if (senha.value.trim() === "") {
        mostrarErro(senha, "A senha é obrigatória.");
        valido = false;
    } else {
        mostrarSucesso(senha);
    }

    // Se tudo estiver certo, simula o envio do formulário
    if (valido) {
        alert("Login realizado com sucesso!");
    }
});
