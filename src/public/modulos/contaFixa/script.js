let contasFixas =
    JSON.parse(localStorage.getItem("contasFixas")) || [];

let indiceEdicao = -1;

function salvarNoLocalStorage() {

    localStorage.setItem(
        "contasFixas",
        JSON.stringify(contasFixas)
    );

}

function salvarContaFixa() {

    let nome =
        document.getElementById("nomeContaFixa").value;

    let mesInicio =
        document.getElementById("mesInicioContaFixa").value;

    let vencimento =
        document.getElementById("vencimentoContaFixa").value;

    let categoria =
        document.getElementById("categoriaContaFixa").value;

    let valor =
        document.getElementById("valorContaFixa").value;

    let pagamento =
        document.getElementById("pagamentoContaFixa").value;

    let transacao =
        document.getElementById("transacaoContaFixa").value;

    if (
        nome.trim() == "" ||
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
    document.getElementById("vencimentoContaFixa").value = "";
    document.getElementById("categoriaContaFixa").value = "";
    document.getElementById("valorContaFixa").value = "";
    document.getElementById("pagamentoContaFixa").value = "";
    document.getElementById("transacaoContaFixa").value = "";

}

function editarContaFixa(indice) {

    let conta = contasFixas[indice];

    document.getElementById("nomeContaFixa").value = conta.nome;
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

function listarContasFixas() {

    let lista =
        document.getElementById("listaContasFixas");

    lista.innerHTML = "";

    contasFixas.forEach((conta, indice) => {

        lista.innerHTML += `
            <tr>

                <td>${conta.nome}</td>
                <td>${conta.vencimento}</td>
                <td>${conta.categoria}</td>
                <td>${conta.valor}</td>
                <td>${conta.pagamento}</td>
                <td>${conta.transacao}</td>

                <td class="acoes">

                    <button
                        class="btn-editar"
                        onclick="editarContaFixa(${indice})">

                        Editar

                    </button>

                    <button
                        class="btn-excluir"
                        onclick="excluirContaFixa(${indice})">

                        Excluir

                    </button>

                </td>

            </tr>
        `;

    });

}

function cancelarContaFixa() {

    limparFormulario();

    indiceEdicao = -1;

}

window.onload = function () {

    listarContasFixas();

}


