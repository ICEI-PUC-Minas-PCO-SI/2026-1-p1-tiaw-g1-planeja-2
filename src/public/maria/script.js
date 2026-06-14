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
let dadosFinanceiros;


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


//Grafico 
function criarGrafico() {

    const entradasMes = Array(12).fill(0);
    const saidasMes = Array(12).fill(0);

    for (let i = 0; i < dadosFinanceiros.transacoes.length; i++) {

        const transacao = dadosFinanceiros.transacoes[i];

        const data = new Date(transacao.data);

        const mes = data.getMonth();

        if (transacao.tipo === "entrada") {

            entradasMes[mes] += transacao.valor;

        } else {

            saidasMes[mes] += transacao.valor;

        }

    }

    const ctx = document.getElementById("myChart");

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "JAN",
                "FEV",
                "MAR",
                "ABR",
                "MAI",
                "JUN",
                "JUL",
                "AGO",
                "SET",
                "OUT",
                "NOV",
                "DEZ"
            ],

            datasets: [

                {
                    label: "Entradas",
                    data: entradasMes,
                    backgroundColor: "#22C55E",
                    borderRadius: 6
                },

                {
                    label: "Saídas",
                    data: saidasMes,
                    backgroundColor: "#EF4444",
                    borderRadius: 6
                }
            ]
        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    position: "top"
                }
            },

            scales: {
                y: {

                    beginAtZero: true,

                    grid: {

                        color: "#E5E7EB"

                    }
                }
            }
        }
    });

}

async function carregarDados() {

    const resposta = await fetch("transacoes.json");

    dadosFinanceiros = await resposta.json();

    atualizarDashboard();

    criarGrafico();

}


carregarDados();