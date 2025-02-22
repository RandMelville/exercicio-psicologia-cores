// Função para mudar o título quando o botão é clicado
document.getElementById("botaoMudarTitulo").addEventListener("click", function() {
    // Obtém o elemento do título e altera seu conteúdo
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Título Alterado com Sucesso!";
    
    // Muda a cor do título para verde para indicar sucesso
    titulo.style.color = "green"; 
});

// Contagem regressiva de 10 segundos
let contador = 10;
let elementoContador = document.getElementById("contador");
let elementoMensagem = document.getElementById("mensagem");

// Define o intervalo para a contagem regressiva
let intervalo = setInterval(() => {
    // Exibe o valor atual do contador no elemento
    elementoContador.textContent = contador;

    // Altera a cor do contador com base no valor (laranja até 6, vermelho até 0)
    elementoContador.style.color = contador > 5 ? "orange" : "red"; 

    // Quando o contador chega a 0, interrompe o intervalo
    if (contador === 0) {
        clearInterval(intervalo);
        
        // Oculta o contador e exibe a mensagem final
        elementoContador.style.display = "none";
        elementoMensagem.textContent = "Tempo acabou!";
        
        // Muda a cor da mensagem para azul, indicando o fim
        elementoMensagem.style.color = "blue"; 
    }

    // Decrementa o contador
    contador--;
}, 1000); // Intervalo de 1 segundo (1000 milissegundos)

// Validação do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário antes da validação
    
    // Obtém os valores dos campos de usuário e senha
    let usuario = document.getElementById("usuario");
    let senha = document.getElementById("senha");
    let erroMensagem = document.getElementById("erroMensagem");
    let valido = true; // Variável para verificar se a validação foi bem-sucedida

    // Valida o campo de usuário
    if (usuario.value.trim() === "") {
        usuario.classList.add("erro"); // Marca o campo como erro
        erroMensagem.textContent = "Preencha o campo Usuário."; // Exibe a mensagem de erro
        valido = false;
    } else {
        usuario.classList.remove("erro");
        usuario.classList.add("valido"); // Marca o campo como válido
    }

    // Valida o campo de senha
    if (senha.value.trim() === "") {
        senha.classList.add("erro"); // Marca o campo como erro
        erroMensagem.textContent = "Preencha o campo Senha."; // Exibe a mensagem de erro
        valido = false;
    } else {
        senha.classList.remove("erro");
        senha.classList.add("valido"); // Marca o campo como válido
    }

    // Se ambos os campos forem válidos, exibe uma mensagem de sucesso
    if (valido) {
        erroMensagem.textContent = "";
        alert("Login realizado com sucesso!");
    }
});
