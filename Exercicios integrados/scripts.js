// Verifica se a página atual é a lista de tarefas
if (document.getElementById('adicionarTarefa')) {
    // Página 1: Lista de Tarefas
    document.getElementById('adicionarTarefa').addEventListener('click', function() {
        const novaTarefa = document.getElementById('novaTarefa').value;
        if (novaTarefa) {
            const li = document.createElement('li');
            li.textContent = novaTarefa;

            // Adiciona classe "importante" se a tarefa contém "importante"
            if (novaTarefa.toLowerCase().includes('importante')) {
                li.classList.add('importante');
            }

            // Botão para marcar como concluída
            const botaoConcluir = document.createElement('button');
            botaoConcluir.textContent = 'Concluir';
            botaoConcluir.classList.add('botaoConcluir');
            botaoConcluir.addEventListener('click', function() {
                li.remove(); // Remove da lista de tarefas pendentes
                li.removeChild(botaoConcluir); // Remove o botão "Concluir"
                document.getElementById('listaConcluidas').appendChild(li); // Adiciona à lista de concluídas
            });

            li.appendChild(botaoConcluir);
            document.getElementById('listaTarefas').appendChild(li);
            document.getElementById('novaTarefa').value = ''; // Limpa o campo
        }
    });
}

// Verifica se a página atual é a de mudar cor do texto
if (document.getElementById('mudarCor')) {
    // Página 2: Mudar Cor do Texto
    document.getElementById('mudarCor').addEventListener('click', function() {
        const texto = document.getElementById('texto');
        const cores = ['blue', 'green', 'red', 'purple'];
        const corAtual = texto.style.color;

        // Alterna entre as cores
        const novaCor = cores.find(cor => cor !== corAtual) || 'black';
        texto.style.color = novaCor;
    });
}