let dados = {};

fetch("dados.json")
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        dados = json;
        carregarCursos();
    })
    .catch(function(erro) {
        console.log("Erro ao carregar o JSON:", erro);
    });

function mostrarLivros() {
    let titulo = document.getElementById("tituloResultado");
    let lista = document.getElementById("listaResultado");

    titulo.innerText = "Livros Indicados";
    lista.innerHTML = "";

    for (let i = 0; i < dados.livros.length; i++) {
        lista.innerHTML += `
            <div class="item">
                <h3>${dados.livros[i].titulo}</h3>
                <p><strong>Autor:</strong> ${dados.livros[i].autor}</p>
                <p>${dados.livros[i].descricao}</p>
                <span class="tag">${dados.livros[i].categoria}</span>
            </div>
        `;
    }
}

function mostrarDocumentarios() {
    let titulo = document.getElementById("tituloResultado");
    let lista = document.getElementById("listaResultado");

    titulo.innerText = "Documentários Indicados";
    lista.innerHTML = "";

    for (let i = 0; i < dados.documentarios.length; i++) {
        lista.innerHTML += `
            <div class="item">
                <h3>${dados.documentarios[i].titulo}</h3>
                <p><strong>Plataforma:</strong> ${dados.documentarios[i].plataforma}</p>
                <p>${dados.documentarios[i].descricao}</p>
                <span class="tag">${dados.documentarios[i].categoria}</span>
            </div>
        `;
    }
}

function abrirModal() {
    let modal = document.getElementById("modalDicas");
    let listaDicas = document.getElementById("listaDicas");

    listaDicas.innerHTML = "";

    for (let i = 0; i < dados.dicas.length; i++) {
        listaDicas.innerHTML += `
            <div class="item">
                <h3>${dados.dicas[i].titulo}</h3>
                <p>${dados.dicas[i].descricao}</p>
                <span class="tag">${dados.dicas[i].tipo}</span>
            </div>
        `;
    }

    modal.style.display = "block";
}

function fecharModal() {
    let modal = document.getElementById("modalDicas");
    modal.style.display = "none";
}

function carregarCursos() {
    let listaCursos = document.getElementById("listaCursos");

    listaCursos.innerHTML = "";

    for (let i = 0; i < dados.cursos.length; i++) {
        listaCursos.innerHTML += `
            <a class="link-curso" href="${dados.cursos[i].link}" target="_blank">
                ${dados.cursos[i].titulo}
            </a>
        `;
    }
}

window.onclick = function(evento) {
    let modal = document.getElementById("modalDicas");

    if (evento.target == modal) {
        modal.style.display = "none";
    }
};