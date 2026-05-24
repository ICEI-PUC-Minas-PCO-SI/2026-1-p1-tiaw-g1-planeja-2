// Trabalho Interdisciplinar 1 - Aplicações Web
//
// Esse módulo implementa uma API RESTful baseada no JSONServer
// O servidor JSONServer fica hospedado na seguinte URL
// https://jsonserver.rommelpuc.repl.co/contatos
//
// Para montar um servidor para o seu projeto, acesse o projeto 
// do JSONServer no Replit, faça o FORK do projeto e altere o 
// arquivo db.json para incluir os dados do seu projeto.
//
// URL Projeto JSONServer: https://replit.com/@rommelpuc/JSONServer
//
// Autor: Rommel Vieira Carneiro
// Data: 03/10/2023

/*const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
  
// Para permitir que os dados sejam alterados, altere a linha abaixo
// colocando o atributo readOnly como false.
const middlewares = jsonServer.defaults({ noCors: true })
server.use(middlewares)
server.use(router)

server.listen(3000, () => {
  console.log(`JSON Server is running em http://localhost:3000`)
})*/

let iconeSelecionado = "fa-utensils";

const icones = document.querySelectorAll(".icone-item");

/* SELECIONAR ÍCONE */

icones.forEach(item => {

  item.addEventListener("click", () => {

    icones.forEach(i => i.classList.remove("ativo"));

    item.classList.add("ativo");

    iconeSelecionado = item.dataset.icon;

  });

});

/* SALVAR */

function salvarCategoria() {

  const nomeInput = document.getElementById("nomeCategoria");

  const nome = nomeInput.value;

  if (nome.trim() === "") {

    alert("Digite o nome da categoria");

    return;

  }

  const lista = document.getElementById("listaCategorias");

  const card = document.createElement("div");

  card.classList.add("card-categoria");

  card.innerHTML = `

        <div class="info-categoria">

            <div class="icone-categoria">
                <i class="fa-solid ${iconeSelecionado}"></i>
            </div>

            <div class="nome-categoria">
                ${nome}
            </div>

        </div>

        <div class="acoes">

            <button
                class="btn-editar"
                onclick="editarCategoria(this)"
            >
                Editar
            </button>

            <button
                class="btn-excluir"
                onclick="excluirCategoria(this)"
            >
                Excluir
            </button>

        </div>

    `;

  lista.appendChild(card);

  nomeInput.value = "";

}

/* EXCLUIR */

function excluirCategoria(botao) {

  botao.closest(".card-categoria").remove();

}

/* EDITAR */

function editarCategoria(botao) {

  const card = botao.closest(".card-categoria");

  const nomeCategoria = card.querySelector(".nome-categoria");

  const iconeCategoria = card.querySelector(".icone-categoria i");

  /* EDITAR NOME */

  const novoNome = prompt(
    "Editar nome da categoria:",
    nomeCategoria.textContent
  );

  if (novoNome === null) {
    return;
  }

  if (novoNome.trim() === "") {

    alert("O nome não pode ficar vazio");

    return;

  }

  nomeCategoria.textContent = novoNome;

  /* EDITAR ÍCONE */

  const opcoes = [

    "fa-utensils",
    "fa-car",
    "fa-house",
    "fa-heart",
    "fa-cart-shopping",
    "fa-gamepad",
    "fa-plane",
    "fa-book",
    "fa-bolt",
    "fa-shirt"

  ];

  let mensagem = "Escolha o número do novo ícone:\n\n";

  opcoes.forEach((icone, index) => {

    mensagem += `${index + 1} - ${icone}\n`;

  });

  const escolha = prompt(mensagem);

  if (escolha === null) {
    return;
  }

  const indice = parseInt(escolha) - 1;

  if (indice >= 0 && indice < opcoes.length) {

    iconeCategoria.className = `fa-solid ${opcoes[indice]}`;

  } else {

    alert("Ícone inválido");

  }

}