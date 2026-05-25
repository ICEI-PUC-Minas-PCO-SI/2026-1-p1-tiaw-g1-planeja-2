let categorias = [];

function salvarNoLocalStorage() {

  localStorage.setItem(
    "categorias",
    JSON.stringify(categorias)
  );

}

let iconeSelecionado = "fa-utensils";

const icones = document.querySelectorAll(".icone-item");

icones.forEach(item => {

  item.addEventListener("click", () => {

    icones.forEach(i => i.classList.remove("ativo"));

    item.classList.add("ativo");

    iconeSelecionado = item.dataset.icon;

  });

});

function salvarCategoria() {

  const nomeInput = document.getElementById("nomeCategoria");

  const nome = nomeInput.value;

  if (nome.trim() === "") {

    alert("Digite o nome da categoria");

    return;

  }

  const categoria = {

    id: Date.now(),

    nome: nome,

    icone: iconeSelecionado

  };

  categorias.push(categoria);

  salvarNoLocalStorage();

  criarCard(categoria);

  nomeInput.value = "";

}

function criarCard(categoria) {

  const lista = document.getElementById("listaCategorias");

  const card = document.createElement("div");

  card.classList.add("card-categoria");

  card.setAttribute("data-id", categoria.id);

  card.innerHTML = `

    <div class="info-categoria">

      <div class="icone-categoria">
        <i class="fa-solid ${categoria.icone}"></i>
      </div>

      <div class="nome-categoria">
        ${categoria.nome}
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

}

function excluirCategoria(botao) {

  const card = botao.closest(".card-categoria");

  const id = Number(card.dataset.id);

  categorias = categorias.filter(
    categoria => categoria.id !== id
  );

  salvarNoLocalStorage();

  card.remove();

}

function editarCategoria(botao) {

  const card = botao.closest(".card-categoria");

  const nomeCategoria = card.querySelector(".nome-categoria");

  const iconeCategoria = card.querySelector(".icone-categoria i");

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

  const id = Number(card.dataset.id);

  const categoria = categorias.find(
    categoria => categoria.id === id
  );

  categoria.nome = novoNome;

  const opcoes = [

    {
      nome: "Talheres",
      classe: "fa-utensils"
    },

    {
      nome: "Carro",
      classe: "fa-car"
    },

    {
      nome: "Casa",
      classe: "fa-house"
    },

    {
      nome: "Coração",
      classe: "fa-heart"
    },

    {
      nome: "Carrinho de compras",
      classe: "fa-cart-shopping"
    },

    {
      nome: "Game",
      classe: "fa-gamepad"
    },

    {
      nome: "Avião",
      classe: "fa-plane"
    },

    {
      nome: "Livro",
      classe: "fa-book"
    },

    {
      nome: "Energia",
      classe: "fa-bolt"
    },

    {
      nome: "Camisa",
      classe: "fa-shirt"
    }

  ];

  let mensagem = "Escolha o número do novo ícone:\n\n";

  opcoes.forEach((icone, index) => {

    mensagem += `${index + 1} - ${icone.nome}\n`;

  });

  const escolha = prompt(mensagem);

  if (escolha === null) {

    salvarNoLocalStorage();

    return;

  }

  const indice = parseInt(escolha) - 1;

  if (indice >= 0 && indice < opcoes.length) {

    iconeCategoria.className =
      `fa-solid ${opcoes[indice].classe}`;

    categoria.icone = opcoes[indice].classe;

  } else {

    alert("Ícone inválido");

  }

  salvarNoLocalStorage();

}

window.onload = function () {

  const dados = localStorage.getItem("categorias");

  if (dados) {

    categorias = JSON.parse(dados);

    categorias.forEach(categoria => {

      criarCard(categoria);

    });

  }

};