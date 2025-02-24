// Função para adicionar uma tarefa
function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const lista = document.getElementById("listaTarefas");

    if (input.value.trim() === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    // Criar um novo item na lista
    const li = document.createElement("li");
    li.textContent = input.value;

    // Botão de remover
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.classList.add("remove");
    botaoRemover.onclick = function () {
        lista.removeChild(li);
    };

    // Adicionar o botão ao item da lista
    li.appendChild(botaoRemover);
    lista.appendChild(li);

    // Limpar o campo de entrada
    input.value = "";
}
