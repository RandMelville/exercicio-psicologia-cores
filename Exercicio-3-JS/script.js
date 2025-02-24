document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("senha");
    let erroUsuario = document.getElementById("erroUsuario");
    let erroSenha = document.getElementById("erroSenha");

    let valido = true; // Flag para verificar se pode enviar o formulário

    // Validação do usuário
    if (usuario.value.trim() === "") {
        erroUsuario.textContent = "Preencha o usuário!";
        usuario.classList.add("invalido");
        usuario.classList.remove("valido");
        valido = false;
    } else {
        erroUsuario.textContent = "";
        usuario.classList.add("valido");
        usuario.classList.remove("invalido");
    }

    // Validação da senha
    if (senha.value.trim() === "") {
        erroSenha.textContent = "Preencha a senha!";
        senha.classList.add("invalido");
        senha.classList.remove("valido");
        valido = false;
    } else {
        erroSenha.textContent = "";
        senha.classList.add("valido");
        senha.classList.remove("invalido");
    }

    // Se tudo estiver correto, pode enviar o formulário (simulado aqui)
    if (valido) {
        alert("Login bem-sucedido!");
        this.submit();
    }
});
