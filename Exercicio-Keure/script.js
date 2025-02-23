/* Validação do formulário de contato */
const formContato = document.getElementById('form-contato');
formContato?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');
  let formValido = true;

  // Valida o campo Nome: se estiver vazio, borda fica vermelha; caso contrário, verde.
  if (nome.value.trim() === "") {
    nome.style.borderColor = 'red';
    formValido = false;
  } else {
    nome.style.borderColor = 'green';
  }

  // Valida o campo E-mail
  if (email.value.trim() === "") {
    email.style.borderColor = 'red';
    formValido = false;
  } else {
    email.style.borderColor = 'green';
  }

  // Valida o campo Mensagem
  if (mensagem.value.trim() === "") {
    mensagem.style.borderColor = 'red';
    formValido = false;
  } else {
    mensagem.style.borderColor = 'green';
  }

  if (!formValido) {
    alert('Preencha todos os campos corretamente!');
  } else {
    alert('Formulário enviado com sucesso!');
  }
});

/* Validação do formulário de login com mensagem de erro na página */
const formLogin = document.getElementById('form-login');
formLogin?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const usuario = document.getElementById('usuario');
  const senha = document.getElementById('senha');
  const errorDiv = document.getElementById('login-error');
  let loginValido = true;

  // Valida o campo Usuário
  if (usuario.value.trim() === "") {
    usuario.style.borderColor = 'red';
    loginValido = false;
  } else {
    usuario.style.borderColor = 'green';
  }

  // Valida o campo Senha
  if (senha.value.trim() === "") {
    senha.style.borderColor = 'red';
    loginValido = false;
  } else {
    senha.style.borderColor = 'green';
  }

  if (!loginValido) {
    errorDiv.textContent = 'Preencha todos os campos de login!';
  } else {
    errorDiv.textContent = '';
    alert('Login efetuado com sucesso!');
  }
});

/* Função para alterar o título com feedback visual: 
   Ao clicar, o título muda para "Título alterado com sucesso!" e fica verde */
function mudarTitulo() {
  const titulo = document.querySelector('h1');
  titulo.textContent = 'Título alterado com sucesso!';
  titulo.style.color = 'green';
}

/* Contagem regressiva (exibida em index.html)
   Exibe a contagem de 10 a 0 com cor laranja e, ao terminar, mostra "Tempo Acabou!" em verde */
let tempo = 10;
const contagemDisplay = document.getElementById('contagem');
const temporizador = setInterval(() => {
  if (contagemDisplay) {
    contagemDisplay.textContent = tempo;
    contagemDisplay.style.color = 'orange';
  }
  
  if (tempo === 0) {
    clearInterval(temporizador);
    if (contagemDisplay) {
      contagemDisplay.textContent = "Tempo Acabou!";
      contagemDisplay.style.color = 'green';
    }
  }
  tempo--;
}, 1000);

/* Página Interativa de Tarefas:
   Permite que o usuário adicione tarefas à lista.
   Se a tarefa contém a palavra "urgente", ela é destacada em azul. */
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');
btnAdicionar?.addEventListener('click', () => {
  const tarefaInput = document.getElementById('nova-tarefa');
  const tarefaTexto = tarefaInput.value.trim();
  if (tarefaTexto !== "") {
    const li = document.createElement('li');
    li.textContent = tarefaTexto;
    if(tarefaTexto.toLowerCase().includes('urgente')) {
      li.style.color = 'blue';
    }
    listaTarefas.appendChild(li);
    tarefaInput.value = "";
  } else {
    alert('Digite uma tarefa válida!');
  }
});

/* Muda de Cor ao Clicar com Feedback Visual:
   Alterna a cor do texto entre verde e azul */
const btnMudaCor = document.getElementById('btn-muda-cor');
btnMudaCor?.addEventListener('click', () => {
  const textoMuda = document.getElementById('texto-muda');
  const corAtual = textoMuda.style.color;
  if (corAtual === 'green') {
    textoMuda.style.color = 'blue';
  } else {
    textoMuda.style.color = 'green';
  }
});