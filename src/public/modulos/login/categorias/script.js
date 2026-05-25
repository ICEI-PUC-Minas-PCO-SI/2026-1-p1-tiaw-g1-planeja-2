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

function excluirCategoria(botao) {

  botao.closest(".card-categoria").remove();

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
    return;
  }

  const indice = parseInt(escolha) - 1;

  if (indice >= 0 && indice < opcoes.length) {

    iconeCategoria.className = `fa-solid ${opcoes[indice].classe}`;

  } else {

    alert("Ícone inválido");

  }

}