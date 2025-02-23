// Exercício 1 - Página Interativa de Tarefas
function adicionarTarefa() {
    const campoTarefa = document.getElementById("campoTarefa");
    const tarefaTexto = campoTarefa.value.trim();

    if (tarefaTexto !== "") {
        const listaTarefas = document.getElementById("listaTarefas");

        const novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefaTexto;

        // Adicionar classe para destacar tarefas importantes
        if (tarefaTexto.toLowerCase().includes("importante")) {
            novaTarefa.classList.add("importante");
        }

        listaTarefas.appendChild(novaTarefa);
        campoTarefa.value = ""; // Limpa o campo de entrada após adicionar
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}

// Exercício 2 - Muda de Cor ao Clicar
function mudarCorTexto() {
    const texto = document.getElementById("texto");
    texto.style.color = "green"; // Altera a cor para verde ao clicar
}
