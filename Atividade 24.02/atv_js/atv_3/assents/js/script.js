const form = document.getElementById("login-form");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const erroUsuario = document.getElementById("erro-usuario");
const erroSenha = document.getElementById("erro-senha");

function validarCampo(campo, erroCampo, mensagemErro) {
    if (campo.value.trim() === "") {
        erroCampo.textContent = mensagemErro;
        campo.classList.add("invalido");
        campo.classList.remove("valido");
        return false;
    } else {
        erroCampo.textContent = "";
        campo.classList.add("valido");
        campo.classList.remove("invalido");
        return true;
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let usuarioValido = validarCampo(usuario, erroUsuario, "Usuário obrigatório!");
    let senhaValida = validarCampo(senha, erroSenha, "Senha obrigatória!");

    if (usuarioValido && senhaValida) {
        alert("Login bem-sucedido! ✅");
        form.submit();
    }
});
