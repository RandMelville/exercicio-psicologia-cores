document.getElementById('formulario').addEventListener('submit', function(event) {
    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');
    var erroUsuario = document.getElementById('erroUsuario');
    var erroSenha = document.getElementById('erroSenha');
    var valido = true;

    // Resetar bordas e mensagens de erro
    usuario.style.border = '1px solid black'; // Borda padrão
    senha.style.border = '1px solid black'; // Borda padrão
    erroUsuario.textContent = '';
    erroSenha.textContent = '';

    // Validação do campo de usuário
    if (usuario.value === '') {
        erroUsuario.textContent = 'Usuário é obrigatório.';
        usuario.style.border = '2px solid red'; // Borda vermelha para erro
        valido = false;
    }

    // Validação do campo de senha
    if (senha.value === '') {
        erroSenha.textContent = 'Senha é obrigatória.';
        senha.style.border = '2px solid red'; // Borda vermelha para erro
        valido = false;
    }

    // Se o formulário for válido
    if (valido) {
        // Aplica borda verde para indicar sucesso
        usuario.style.border = '2px solid green';
        senha.style.border = '2px solid green';

        // Exibe a mensagem de redirecionamento
        var titulo = document.getElementById('titulo');
        titulo.textContent = 'Redirecionando...';
        titulo.style.color = 'green';

        // Simula um redirecionamento após 2 segundos
        setTimeout(function() {
            window.location.href = '/exercicio-psicologia-cores/3- Validacao de Formulario com Feedback Visual/validacaoForm.html'; // Substitua pela URL desejada
        }, 2000);

        event.preventDefault(); // Impede o envio do formulário
    } else {
        event.preventDefault(); // Impede o envio do formulário se houver erros
    }
});