// Exercício 1: Página Interativa de Tarefas com Cores Estratégicas
function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefaInput');
    const listaTarefas = document.getElementById('listaTarefas');
    const tarefaTexto = tarefaInput.value;

    if (tarefaTexto === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    // Criação do item da lista
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = tarefaTexto;

    // Adicionar classe "important" se a tarefa for importante
    if (tarefaTexto.toLowerCase().includes('importante')) {
        novaTarefa.classList.add('important');
    }

    // Criar o botão de remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.classList.add('remove');
    botaoRemover.onclick = function () {
        listaTarefas.removeChild(novaTarefa);
    };

    // Adicionar o botão de remover ao item da lista
    novaTarefa.appendChild(botaoRemover);

    // Adicionar a tarefa na lista
    listaTarefas.appendChild(novaTarefa);

    // Limpar o campo de entrada
    tarefaInput.value = "";
}

// Exercício 2: Muda de Cor ao Clicar com Feedback Visual
function mudarCorTexto() {
    const texto = document.getElementById('texto');
    texto.style.color = '#007bff';  // Altera a cor para azul
}
