document.getElementById("prazo").min =
    new Date().toISOString().split("T")[0];

const form = document.getElementById("formMeta");
const listaMetas = document.getElementById("listaMetas");

let metas = JSON.parse(localStorage.getItem("metas")) || [];

metas = metas.map(meta => ({
    ...meta,
    valorObjetivo: Number(meta.valorObjetivo),
    valorAtual: Number(meta.valorAtual)
}));

let editando = null;

function salvarLocalStorage() {

    localStorage.setItem(
        "metas",
        JSON.stringify(metas)
    );

}

function mostrarMetas() {

    listaMetas.innerHTML = "";

    if (metas.length === 0) {

        listaMetas.innerHTML = `

        <div class="sem-metas">
            Nenhuma meta cadastrada.
        </div>

        `;

        return;
    }

    metas.forEach((meta, index) => {

        let percentual = 0;

        if (meta.valorObjetivo > 0) {
            percentual = (meta.valorAtual / meta.valorObjetivo) * 100;
        }

        if (percentual > 100) {
            percentual = 100;
        }

        let falta = meta.valorObjetivo - meta.valorAtual;

        if (falta < 0) {
            falta = 0;
        }

        listaMetas.innerHTML += `

        <div class="card">

            <div class="card-topo">

                <h3>${meta.nome}</h3>

                <div class="status">

                ${meta.valorAtual >= meta.valorObjetivo
                && meta.valorObjetivo > 0

                ? "Meta concluída"

                : "Meta ativa"}

                </div>

            </div>

            <div class="infos">

                <div class="info-box">
                    <p>Valor Atual</p>

                    <h4>
                    R$ ${meta.valorAtual.toFixed(2)}
                    </h4>
                </div>

                <div class="info-box">
                    <p>Valor Objetivo</p>

                    <h4>

                    ${meta.valorObjetivo > 0

                ? `R$ ${meta.valorObjetivo.toFixed(2)}`

                : "Não definido"}

                    </h4>

                </div>

                <div class="info-box">
                    <p>Falta</p>

                    <h4>

                    ${meta.valorObjetivo > 0

                ? `R$ ${falta.toFixed(2)}`

                : "Não definido"}

                    </h4>
                </div>

                <div class="info-box">
                    <p>Prazo</p>

                    <h4>
                    ${meta.prazo || "Não definido"}
                    </h4>
                </div>

            </div>

            <div class="adicionar-valor">

                <input
                    type="number"
                    id="valor-${index}"
                    placeholder="Digite o valor guardado"
                >

                <button
                    class="btn-add"
                    onclick="adicionarValor(${index})"
                >
                    + Adicionar
                </button>

            </div>

            <div class="progresso-meta">

                <div class="progresso-topo">
                    <span>Progresso da meta</span>
                    <strong>${percentual.toFixed(0)}%</strong>
                </div>

                <div class="barra-meta">
                    <div class="barra-preenchida" style="width: ${percentual}%"></div>
                </div>

            </div>

            <div class="acoes">

                <button
                    class="btn-editar"
                    onclick="editarMeta(${index})"
                >
                    Editar
                </button>

                <button
                    class="btn-excluir"
                    onclick="excluirMeta(${index})"
                >
                    Excluir
                </button>

            </div>

        </div>

        `;
    });

}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nomeMeta =
        document.getElementById("nomeMeta")
            .value
            .trim();

    const valorObjetivo = Number(
        document.getElementById("valorObjetivo").value
    ) || 0;

    const prazo =
        document.getElementById("prazo").value;

    if (nomeMeta === "") {

        alert(
            "O nome da meta é obrigatório."
        );

        return;
    }

    const meta = {

        nome: nomeMeta,

        valorObjetivo: valorObjetivo,

        prazo: prazo,

        valorAtual: 0
    };

    if (editando !== null) {

        meta.valorAtual =
            metas[editando].valorAtual;

        metas[editando] = meta;

        editando = null;

    } else {

        metas.push(meta);

    }

    salvarLocalStorage();

    mostrarMetas();

    form.reset();

});

function adicionarValor(index) {

    const inputValor =
        document.getElementById(`valor-${index}`);

    const valor = Number(inputValor.value);

    if (valor === 0 || isNaN(valor)) {

        alert("Digite um valor diferente de zero.");

        return;
    }

    if (metas[index].valorAtual + valor < 0) {

        alert("O valor atual não pode ficar negativo.");

        return;
    }

    metas[index].valorAtual += valor;

    salvarLocalStorage();

    // cria uma transação automática no Dashboard
    let transacoes =
        JSON.parse(localStorage.getItem("transacoes")) || [];

    const transacaoMeta = {
        id: Date.now(),
        data: new Date().toISOString().split("T")[0],
        descricao: "Valor guardado para meta: " + metas[index].nome,
        categoria: "Metas",
        valor: Math.abs(valor),
        formaPagamento: "Reserva",
        tipo: valor > 0 ? "saida" : "entrada"
    };

    transacoes.push(transacaoMeta);

    localStorage.setItem(
        "transacoes",
        JSON.stringify(transacoes)
    );

    mostrarMetas();

}

function excluirMeta(index) {

    const confirmar = confirm(
        "Deseja excluir esta meta?"
    );

    if (confirmar) {

        metas.splice(index, 1);

        salvarLocalStorage();

        mostrarMetas();

    }

}

function editarMeta(index) {

    const meta = metas[index];

    document.getElementById("nomeMeta").value =
        meta.nome;

    document.getElementById("valorObjetivo").value =
        meta.valorObjetivo;

    document.getElementById("prazo").value =
        meta.prazo;

    editando = index;

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

function limparFormulario() {

    form.reset();

    editando = null;

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

carregarUsuarioMenu();

mostrarMetas();