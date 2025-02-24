document.getElementById("adicionar").addEventListener("click", function () {
    let tarefaTexto = document.getElementById("tarefa").value;
    if (tarefaTexto.trim() !== "") {
        let lista = document.getElementById("lista");

        let item = document.createElement("li");
        item.textContent = tarefaTexto;

        // Marcar como importante ao clicar
        item.addEventListener("click", function () {
            item.classList.toggle("important");
        });

        lista.appendChild(item);
        document.getElementById("tarefa").value = "";
    }
});
