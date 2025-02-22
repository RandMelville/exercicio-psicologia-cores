// Adicionar tarefa à lista
document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskText;

    // Adicionar classe "important" se a tarefa contiver "importante"
    if (taskText.toLowerCase().includes("importante")) {
        li.classList.add("important");
    }

    taskList.appendChild(li);
    taskInput.value = ""; // Limpa o campo após adicionar
});

// Mudança de cor ao clicar
document.getElementById("colorBtn").addEventListener("click", function() {
    let text = document.getElementById("text");

    // Alterna entre as cores
    if (text.style.color === "green") {
        text.style.color = "blue"; // Azul para confirmar ação
    } else {
        text.style.color = "green"; // Verde para sucesso
    }
});
