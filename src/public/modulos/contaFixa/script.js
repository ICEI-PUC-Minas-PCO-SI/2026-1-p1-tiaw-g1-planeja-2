let contasFixas =
    JSON.parse(localStorage.getItem("contasFixas")) || [];

let indiceEdicao = -1;

function carregarCategoriasNoSelect() {
    const select = document.getElementById("categoriaContaFixa");

    if (!select) return;

    const categorias =
        JSON.parse(localStorage.getItem("categorias")) || [];

    select.innerHTML = `<option value="">Selecione</option>`;

    categorias.forEach((categoria) => {
        select.innerHTML += `
            <option value="${categoria.nome}">
                ${categoria.nome}
            </option>
        `;
    });
}

function salvarNoLocalStorage() {
    localStorage.setItem("contasFixas", JSON.stringify(contasFixas));
}

function salvarContaFixa() {
    let nome = document.getElementById("nomeContaFixa").value;
    let mesInicio = document.getElementById("mesInicioContaFixa").value;
    let vencimento = document.getElementById("vencimentoContaFixa").value;
    let categoria = document.getElementById("categoriaContaFixa").value;
    let valor = document.getElementById("valorContaFixa").value;
    let pagamento = document.getElementById("pagamentoContaFixa").value;
    let transacao = document.getElementById("transacaoContaFixa").value;

    if (
        nome.trim() == "" ||
        mesInicio.trim() == "" ||
        vencimento.trim() == "" ||
        categoria.trim() == "" ||
        valor.trim() == "" ||
        pagamento.trim() == "" ||
        transacao.trim() == ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    let conta = {
        nome,
        mesInicio,
        vencimento,
        categoria,
        valor,
        pagamento,
        transacao,
        pagamentos: indiceEdicao == -1
            ? {}
            : contasFixas[indiceEdicao].pagamentos || {}
    };

    if (indiceEdicao == -1) {
        contasFixas.push(conta);
    } else {
        contasFixas[indiceEdicao] = conta;
        indiceEdicao = -1;
    }

    salvarNoLocalStorage();
    limparFormulario();
    listarContasFixas();
}

function limparFormulario() {
    document.getElementById("nomeContaFixa").value = "";
    document.getElementById("mesInicioContaFixa").value = "";
    document.getElementById("vencimentoContaFixa").value = "";
    document.getElementById("categoriaContaFixa").value = "";
    document.getElementById("valorContaFixa").value = "";
    document.getElementById("pagamentoContaFixa").value = "";
    document.getElementById("transacaoContaFixa").value = "";
}

function editarContaFixa(indice) {
    let conta = contasFixas[indice];

    document.getElementById("nomeContaFixa").value = conta.nome;
    document.getElementById("mesInicioContaFixa").value = conta.mesInicio;
    document.getElementById("vencimentoContaFixa").value = conta.vencimento;
    document.getElementById("categoriaContaFixa").value = conta.categoria;
    document.getElementById("valorContaFixa").value = conta.valor;
    document.getElementById("pagamentoContaFixa").value = conta.pagamento;
    document.getElementById("transacaoContaFixa").value = conta.transacao;

    indiceEdicao = indice;
}

function excluirContaFixa(indice) {
    contasFixas.splice(indice, 1);
    salvarNoLocalStorage();
    listarContasFixas();
}

function obterChaveMesAtual() {
    const hoje = new Date();

    return `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;
}

function contaEstaPaga(conta) {
    const chaveMes = obterChaveMesAtual();

    return conta.pagamentos && conta.pagamentos[chaveMes] === true;
}

function alterarPago(indice) {
    const chaveMes = obterChaveMesAtual();

    if (!contasFixas[indice].pagamentos) {
        contasFixas[indice].pagamentos = {};
    }

    contasFixas[indice].pagamentos[chaveMes] =
        !contasFixas[indice].pagamentos[chaveMes];

    salvarNoLocalStorage();
    listarContasFixas();
}

function listarContasFixas() {
    let lista = document.getElementById("listaContasFixas");

    lista.innerHTML = "";

    if (contasFixas.length === 0) {
        lista.innerHTML = `
            <tr>
                <td colspan="9">Nenhuma conta fixa cadastrada.</td>
            </tr>
        `;
        return;
    }

    contasFixas.forEach((conta, indice) => {
        const paga = contaEstaPaga(conta);

        lista.innerHTML += `
            <tr>
                <td>${conta.nome}</td>
                <td>${nomeMes(conta.mesInicio)}</td>
                <td>${conta.vencimento}</td>
                <td>${conta.categoria}</td>
                <td>${conta.valor}</td>
                <td>${conta.pagamento}</td>
                <td>${conta.transacao}</td>

                <td>
                    <input
                        type="checkbox"
                        ${paga ? "checked" : ""}
                        onchange="alterarPago(${indice})"
                    >
                </td>

                <td class="acoes">
                    <button class="btn-editar" onclick="editarContaFixa(${indice})">
                        Editar
                    </button>

                    <button class="btn-excluir" onclick="excluirContaFixa(${indice})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

function nomeMes(numeroMes) {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    return meses[Number(numeroMes)] || "Não informado";
}

function cancelarContaFixa() {
    limparFormulario();
    indiceEdicao = -1;
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

window.onload = function () {
    carregarCategoriasNoSelect();
    listarContasFixas();
    carregarUsuarioMenu();
};