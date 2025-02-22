document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var mensagemErro = document.getElementById('mensagemErro');

    if (!usuario || !senha) {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
    } else {
        mensagemErro.textContent = "";
        alert("Login efetuado com sucesso!");
    }
});
