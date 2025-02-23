# Exercícios de Psicologia das Cores - HTML, CSS e JavaScript

Este repositório contém exercícios práticos de HTML, CSS e JavaScript, com foco na psicologia das cores. O objetivo é aplicar cores estrategicamente para criar uma experiência mais envolvente e emocional para os usuários.

## Resolução do Trabalho📑

Resolvi separar o trabalho em alguns projetos, pois como tinham muitas funcionalidades a serem aplicadas, ficaria estranho colocar tudo em um site só.

### [Projeto: Site Completo - Ecovibe](/Site%20Completo%20-%20Ecovibe/)

Nesse projeto, realizei os exercícios de HTML, CSS e algumas animações e interações simples em Javascript.

#### Visão geral do site

![Capa](https://github.com/user-attachments/assets/d6e140c8-58a1-4f51-84f9-e83ad15ceae7)
*Capa da página - Imagem da natureza gerada por IA*


![Section Sobre Nós](https://github.com/user-attachments/assets/6e0b23b9-61c2-4b2c-8278-94650ca78a83)
*Section Sobre Nós*

![Section Meio Ambiente](https://github.com/user-attachments/assets/025e9468-76b1-41e4-b40c-b7b100f28dd3)
*Section Meio Ambiente - Imagem de pessoa vestindo o produto gerado por IA*

![Rodapé](https://github.com/user-attachments/assets/a9da2466-f776-493f-84f8-fc5a984c9730)
*Rodapé*

![Página - SAC](https://github.com/user-attachments/assets/61a24c56-8f9b-4229-b424-4d25fa2acd96)
*Página - SAC*

![Formulário - SAC](https://github.com/user-attachments/assets/317b58f0-4e2c-4976-9bfe-f81a425094a1)
*Formulário - SAC*

![Rodapé - SAC](https://github.com/user-attachments/assets/d318bf1f-6273-45cd-9891-460c1e4cb86c)
*Rodapé - SAC*

#### HTML - [index.html](/Site%20Completo%20-%20Ecovibe/index.html) e [sac.html](/Site%20Completo%20-%20Ecovibe/sac.html)
O Projeto conta com 2 arquivos HTML, o [index.html](/Site%20Completo%20-%20Ecovibe/index.html) e o [sac.html](/Site%20Completo%20-%20Ecovibe/sac.html). E ao longo do projeto utilizei as seguintes tags:
- `<title>`: Define o título da página (aparece na aba do navegador).
- `<link rel="stylesheet" href="styles.css">`: Vincula o arquivo CSS à página.
- `<script src="scripts.js>"`: Vincula o arquivo JavaScript à página.
- `<header>`: Define o cabeçalho da página.
- `<div>`: Caixa para agrupar conteúdo.
- `<h1>`, `<h2>` e `<h3>`: Título e subtítulos.
- `<p>`: Parágrafos de texto.
- `<nav>`: Área de navegação com links.
- `<a>`: Links para outras seções ou páginas.
- `<section>`: Define uma seção da página.
- `<img>`: Exibe a imagem da capa.
- `<main>`: Define o conteúdo principal da página.
- `<article>`: Conteúdo independente.
- `<ol>`: Lista ordenada.
- `<li>`: Itens da lista.
- `<footer>`: Define o rodapé da página.

Utilizei âncoras `#` para redirecionar à alguma `<section>` da página, como a **Sobre Nós** e a **Meio Ambiente**.

Realizei também o redirecionamento para a página [SAC](/Site%20Completo%20-%20Ecovibe/sac.html), onde o usuário pode entrar em contato com a empresa.

#### [CSS](/Site%20Completo%20-%20Ecovibe/styles.css)
Como a marca se trata de uma empresa que fabrica roupas esportivas com materiais ecológicos, e com projetos relacionadas à reflorestamento, a estilização do site deveria ser moderna e com cores e imagens que remetem a natureza e o dia a dia.

Optei por cores como cinza escuro, branco e preto, e também a principal cor que remete a marca, o verde e sua cor complementar, rosa (imagem da section do Meio Ambiente).

![Cores - Homepage](https://github.com/user-attachments/assets/df7cca73-21af-4355-b9e6-3396eb513fee)
*Cores - Homepage*

Na página [SAC](/Site%20Completo%20-%20Ecovibe/sac.html), utilizei cores mais claras como azul claro, passando confiança e calma e o laranja, transmitindo ação. Além disso, alterei a cor do rodapé para que ficasse mais discreto. 

![Cores - SAC](https://github.com/user-attachments/assets/486c2b43-bb9e-44f3-98b7-26c967ab6957)
*Cores - SAC*

Adicionei alguns `:hover` em situações onde o usuário passa o mouse por cima de itens em que ele pode interagir, como **links/âncoras de redirecionamento** e também o **botão de enviar** no SAC.

Nos links, fiz com que quando o mouse estiver em cima, troque a cor para cinza **suavemente** com o comando `transition: color 0.3s ease-in-out;` e que também insira um sublinhado sob o nome `text-decoration: underline gray;` .

![hover link](https://github.com/user-attachments/assets/ef264ab5-d908-46e3-b477-f234a95a58ae)
*hover em link de redirecionamento*

Na página de SAC, alterei a cor para um laranja mais escuro, com uma mudança **suave** também `transition: color 0.3s ease-in-out;`

![Botão de enviar formulário](https://github.com/user-attachments/assets/27bf24cc-f0d3-4c47-acdd-86e12a010486)
*Botão de enviar formulário*

Deixei o cabeçalho fixo na página, mesmo scrollando a página, o cabeçalho permanece aparecendo.

Ao invés de colocar um conteúdo com 2 colunas, como recomendado, optei por colocar o conteúdo na esquerda e uma imagem na direita (section do Meio Ambiente).

A responsividade da tela foi um pouco complexa, tive que bloquear o scroll horizontal que estava acontecendo em dispositivos menores com `overflow-x: hidden;` e reajustar alguns itens como o slogan em cima da imagem de capa e imagens, alterando a disposição das duas colunas para uma coluna única, como sugerido.

Foi necessário alterar as categorias para um `<div id="menu-icon" onclick="toggleMenu()">☰</div>` dentro do HTML. No entanto só queria que ficasse visível em telas menores, então utilizei o `display: none;` e o `display: block;` .

![Capa - Responsivo](https://github.com/user-attachments/assets/4a7e4af4-02ee-4d5a-9591-24e7232b21d3)
![Sobre Nós - Responsivo](https://github.com/user-attachments/assets/672a4b70-68e1-4095-a8e2-f1f8975a4bff)
![Rodapé - Responsivo](https://github.com/user-attachments/assets/a064733c-a2bb-4173-a5d5-b7ec8abc0a6d)

#### [Javascript](/Site%20Completo%20-%20Ecovibe/scripts.js)
Em Javascript fiz umas breves animações e interações com o usuário:
- **Scroll suave para âncoras:**
  - Seleciona todos os links `<a>` que começam com `#` (âncoras).
  - Adiciona um evento de clique a cada link.
  - Quando clicado, rola a página suavemente até o elemento alvo.
- **Validação e envio do formulário:**
  - Seleciona o formulário pelo ID `contactForm` .
  - Adiciona um evento de envio (submit).
  - Quando enviado, exibe um alerta com o valor do campo `formnome` e limpa o formulário.
- **Alternar visibilidade do menu:**
  - Seleciona o elemento com ID `categorias` .
  - Alterna a classe `active` (adiciona se não existir, remove se existir).
  - Usado para mostrar/esconder o menu em dispositivos móveis.

#### [1- Alterando o Conteúdo com JavaScript](/exercicio-psicologia-cores/1-Alterando%20o%20conteudo/)

**Funcionalidades:**
- Um botão que, ao ser clicado, altera o texto de um título.

- Mudança de cor do texto do título para transmitir a emoção de verde, para positivo ou vermelho para negativo.

- Botão vermelho para chamar atenção e criar sensação de urgência.


#### [2- Contagem Regressiva com Estilo](/exercicio-psicologia-cores/2-%20Contagem%20Regressiva/)
**Funcionalidades:**
- Contagem regressiva de 10 a 0, com atualização em tempo real.

- Mudança de cor da contagem (laranja do 10 ao 6, vermelho do 5 ao 0 para maior urgência e verde para conclusão).

- Exibe "Tempo acabou!" quando a contagem chega a zero.


#### [3- Validação de Formulário com Feedback Visual](/exercicio-psicologia-cores/3-%20Validacao%20de%20Formulario%20com%20Feedback%20Visual/)
**Funcionalidades:**
- Impede o envio do formulário se os campos estiverem vazios.

- Mensagens de erro em vermelho para campos inválidos e bordas verdes/azuis para campos válidos.

- Uso de `event.preventDefault()` para bloquear o envio do formulário caso haja erros.

#### [Exercícios Integrados](/exercicio-psicologia-cores/Exercicios%20integrados/)

**[1. Lista de Tarefas](/exercicio-psicologia-cores/Exercicios%20integrados/listaTarefas.html)**
**Funcionalidades:**
- O usuário pode adicionar tarefas a uma lista dinamicamente.

- Tarefas podem ser marcadas como concluídas e são movidas para uma lista separada.

- Tarefas que contêm a palavra "importante" são destacadas em azul.

- Tarefas concluídas têm um estilo diferenciado (texto riscado e fundo verde claro).

**[2. Mudança de Cor do Texto](/exercicio-psicologia-cores/Exercicios%20integrados/mudaCorTexto.html)**
**Funcionalidades:**
- Um botão que muda a cor do texto entre várias opções (azul, verde, vermelho, roxo).


![Lista de Tarefas](https://github.com/user-attachments/assets/7710e2c3-03dd-46c3-a7b1-4d738887ceae)

![Mudar Cor Texto](https://github.com/user-attachments/assets/9b559139-532c-47f0-8f52-7b28b2f42312)