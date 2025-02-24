const inputTarefa = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click", function() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${textoTarefa} <button class="remove">X</button>`;

        listaTarefas.appendChild(li);

        inputTarefa.value = "";
        
        li.querySelector(".remove").addEventListener("click", function() {
            li.remove();
        });
    } else {
        alert("Por favor, digite uma tarefa!");
    }
});
