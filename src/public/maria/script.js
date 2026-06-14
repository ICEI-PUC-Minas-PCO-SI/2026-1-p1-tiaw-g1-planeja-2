// Botões dos meses
const botoesMes = document.querySelectorAll(".mes-btn");


// mes atual
let mesAtual = "jan";

//dias referente ao mes
const meses = {

    jan: 0,
    fev: 1,
    mar: 2,
    abr: 3,
    mai: 4,
    jun: 5,
    jul: 6,
    ago: 7,
    set: 8,
    out: 9,
    nov: 10,
    dez: 11

};

// dados financeiros
const dadosFinanceiros = {

    transacoes: [

        {
            id: 1,
            data: "2026-01-10",
            tipo: "entrada",
            valor: 1000
        },

        {
            id: 2,
            data: "2026-01-15",
            tipo: "entrada",
            valor: 50
        },

        {
            id: 3,
            data: "2026-01-20",
            tipo: "saida",
            valor: 20
        },

        {
            id: 4,
            data: "2026-02-10",
            tipo: "entrada",
            valor: 20500
        },

        {
            id: 5,
            data: "2026-03-15",
            tipo: "saida",
            valor: 70
        },

        {
            id: 6,
            data: "2026-03-20",
            tipo: "saida",
            valor: 20
        }

    ]

};


// Converção modeda
function formatarMoeda(valor) {

    return valor.toLocaleString("pt-BR", {

        style: "currency",
        currency: "BRL"

    });

}

// atualizar a tela

function atualizarDashboard() {

    let totalEntradas = 0;
    let totalSaidas = 0;

    for (let i = 0; i < dadosFinanceiros.transacoes.length; i++) {

        const transacao = dadosFinanceiros.transacoes[i];

        const data = new Date(transacao.data);

        if (data.getMonth() === meses[mesAtual]) {

            if (transacao.tipo === "entrada") {

                totalEntradas += transacao.valor;

            } else {

                totalSaidas += transacao.valor;

            }

        }

    }

    const saldoAtual = totalEntradas - totalSaidas;

    document.getElementById("entradaValor").innerText =
        formatarMoeda(totalEntradas);

    document.getElementById("saidaValor").innerText =
        formatarMoeda(totalSaidas);

    document.getElementById("saldoAtual").innerText =
        formatarMoeda(saldoAtual);

}


// troca do botao ativo

for (let i = 0; i < botoesMes.length; i++) {

    botoesMes[i].addEventListener("click", function () {

        // REMOVE AZUL DE TODOS
        for (let j = 0; j < botoesMes.length; j++) {

            botoesMes[j].classList.remove("ativo");

        }

        // ADICIONA AZUL NO CLICADO
        this.classList.add("ativo");

        // PEGA O MÊS DO BOTÃO
        mesAtual = this.dataset.mes;

        // ATUALIZA TELA
        atualizarDashboard();

    });

}


atualizarDashboard(); //iniciar dashboard