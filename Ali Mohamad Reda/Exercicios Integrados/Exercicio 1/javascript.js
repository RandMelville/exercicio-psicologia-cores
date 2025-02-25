document.getElementById('adicionarBtn').addEventListener('click', function () {
    var tarefaInput = document.getElementById('tarefaInput');
    var tarefa = tarefaInput.value.trim();
    if (tarefa !== "") {
        var li = document.createElement('li');
        li.textContent = tarefa;
        if (tarefa.toLowerCase().includes("importante")) {
            li.classList.add("importante");
        }
        document.getElementById('listaTarefas').appendChild(li);
        tarefaInput.value = "";
    }
});