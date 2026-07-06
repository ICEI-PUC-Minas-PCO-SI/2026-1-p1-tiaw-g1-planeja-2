let cursosPadrao = [
    {
        id: 1,
        titulo: "Educação Financeira Básica",
        plataforma: "Fundação Bradesco",
        categoria: "Finanças",
        likes: 0,
        dislikes: 0,
        voto: null,
        link: "https://www.ev.org.br"
    },
    {
        id: 2,
        titulo: "Introdução aos Investimentos",
        plataforma: "Sebrae",
        categoria: "Investimentos",
        likes: 0,
        dislikes: 0,
        voto: null,
        link: "https://www.sebrae.com.br"
    },
    {
        id: 3,
        titulo: "Planejamento Financeiro",
        plataforma: "FGV",
        categoria: "Planejamento",
        likes: 0,
        dislikes: 0,
        voto: null,
        link: "https://educacao-executiva.fgv.br"
    }
];

let cursos = JSON.parse(localStorage.getItem("cursos"));

if (!Array.isArray(cursos) || cursos.length === 0 || cursos.some(curso => !curso.titulo)) {
    cursos = cursosPadrao;
    salvarLocalStorage();
}

let dicas = [];

function salvarLocalStorage() {
    localStorage.setItem("cursos", JSON.stringify(cursos));
}

function mostrarCursos(lista) {
    const listaCursos = document.getElementById("listaCursos");

    listaCursos.innerHTML = "";

    document.getElementById("totalCursos").innerText = lista.length;

    if (cursos.length === 0) {
        document.getElementById("maisCurtido").innerText = "Nenhum";
    } else {
        let maisCurtido = cursos[0];

        cursos.forEach(curso => {
            if (curso.likes > maisCurtido.likes) {
                maisCurtido = curso;
            }
        });

        document.getElementById("maisCurtido").innerText =
            maisCurtido.likes > 0
                ? `${maisCurtido.titulo} (${maisCurtido.likes} 👍)`
                : "Nenhum";
    }

    if (lista.length === 0) {
        listaCursos.innerHTML = `
            <div class="sem-cursos">
                Nenhum curso encontrado.
            </div>
        `;
        return;
    }

    lista.forEach(curso => {
        listaCursos.innerHTML += `
            <div class="card">
                <h3>${curso.titulo}</h3>

                <p><strong>Plataforma:</strong> ${curso.plataforma}</p>
                <p><strong>Categoria:</strong> ${curso.categoria}</p>

                <div class="botoes">
                    <button class="btn-like" onclick="curtir(${curso.id})">
                        👍 ${curso.likes}
                    </button>

                    <button class="btn-dislike" onclick="naoCurtir(${curso.id})">
                        👎 ${curso.dislikes}
                    </button>

                    <a href="${curso.link}" target="_blank" class="btn-link">
                        Acessar Curso
                    </a>
                </div>

                ${
                    curso.voto === "like"
                        ? `<p class="avaliado">✓ Você curtiu este curso</p>`
                        : ""
                }

                ${
                    curso.voto === "dislike"
                        ? `<p class="nao-avaliado">✗ Você não curtiu este curso</p>`
                        : ""
                }
            </div>
        `;
    });
}

function curtir(id) {
    const curso = cursos.find(c => c.id === id);

    if (!curso) return;

    if (curso.voto === "like") {
        alert("Você já curtiu este curso.");
        return;
    }

    if (curso.voto === "dislike") {
        curso.dislikes--;
    }

    curso.likes++;
    curso.voto = "like";

    salvarLocalStorage();
    aplicarFiltros();
}

function naoCurtir(id) {
    const curso = cursos.find(c => c.id === id);

    if (!curso) return;

    if (curso.voto === "dislike") {
        alert("Você já não curtiu este curso.");
        return;
    }

    if (curso.voto === "like") {
        curso.likes--;
    }

    curso.dislikes++;
    curso.voto = "dislike";

    salvarLocalStorage();
    aplicarFiltros();
}

function aplicarFiltros() {
    const texto = document.getElementById("pesquisa").value.toLowerCase();
    const categoria = document.getElementById("categoria").value;

    const filtrados = cursos.filter(curso => {
        const nomeValido = curso.titulo.toLowerCase().includes(texto);
        const categoriaValida = categoria === "Todos" || curso.categoria === categoria;

        return nomeValido && categoriaValida;
    });

    mostrarCursos(filtrados);
}

function limparAvaliacoes() {
    const confirmar = confirm("Deseja limpar todas as avaliações?");

    if (!confirmar) return;

    cursos.forEach(curso => {
        curso.likes = 0;
        curso.dislikes = 0;
        curso.voto = null;
    });

    salvarLocalStorage();
    aplicarFiltros();
}

async function carregarDicas() {
    try {
        const resposta = await fetch("dados.json");

        if (!resposta.ok) {
            throw new Error("Arquivo dados.json não encontrado.");
        }

        const dados = await resposta.json();

        dicas = dados.dicas || [];
    } catch (erro) {
        console.error("Erro ao carregar dicas:", erro);

        dicas = [];
    }
}

function abrirModal() {
    const modal = document.getElementById("modalDicas");
    const lista = document.getElementById("listaDicas");

    lista.innerHTML = "";

    if (dicas.length === 0) {
        lista.innerHTML = `
            <div class="dica-item">
                <h3>Nenhuma dica encontrada</h3>
                <p>Verifique se o arquivo dados.json está na mesma pasta do script.js.</p>
            </div>
        `;
    } else {
        dicas.forEach((dica) => {
            lista.innerHTML += `
                <div class="dica-item">
                    <h3>${dica.titulo}</h3>
                    <p>${dica.descricao}</p>
                    <span class="dica-tipo">${dica.tipo}</span>
                </div>
            `;
        });
    }

    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalDicas").style.display = "none";
}

function carregarUsuarioMenu() {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) return;

    const nomeUsuarioMenu = document.getElementById("nomeUsuarioMenu");
    const fotoUsuarioMenu = document.getElementById("fotoUsuarioMenu");

    if (nomeUsuarioMenu) {
        nomeUsuarioMenu.innerText = usuarioLogado.nome || "Usuário";
    }

    if (fotoUsuarioMenu && usuarioLogado.foto) {
        fotoUsuarioMenu.src = usuarioLogado.foto;
    }
}

window.onload = async function () {
    await carregarDicas();

    mostrarCursos(cursos);
    carregarUsuarioMenu();

    document.getElementById("pesquisa").addEventListener("input", aplicarFiltros);
    document.getElementById("categoria").addEventListener("change", aplicarFiltros);
};