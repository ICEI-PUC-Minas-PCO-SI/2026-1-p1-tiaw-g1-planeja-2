const botoesMes = document.querySelectorAll(".mes-btn");

let mesAtual = "jan";
let graficoFinanceiro = null;

const meses = {
    jan: 0, fev: 1, mar: 2, abr: 3,
    mai: 4, jun: 5, jul: 6, ago: 7,
    set: 8, out: 9, nov: 10, dez: 11
};

function formatarMoeda(valor) {
    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function converterValor(valor) {
    if (typeof valor === "number") return valor;

    return Number(
        String(valor)
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim()
    ) || 0;
}

function buscarTransacoes() {
    return JSON.parse(localStorage.getItem("transacoes")) || [];
}

function buscarContasFixas() {
    return JSON.parse(localStorage.getItem("contasFixas")) || [];
}

function atualizarDashboard() {
    const transacoes = buscarTransacoes();
    const contasFixas = buscarContasFixas();

    let totalEntradas = 0;
    let totalSaidas = 0;

    transacoes.forEach((transacao) => {
        const data = new Date(transacao.data + "T00:00:00");

        if (data.getMonth() === meses[mesAtual]) {
            const valor = converterValor(transacao.valor);

            if (transacao.tipo === "entrada") totalEntradas += valor;
            if (transacao.tipo === "saida") totalSaidas += valor;
        }
    });

    contasFixas.forEach((conta) => {
        const valor = converterValor(conta.valor);
        const mesSelecionado = meses[mesAtual];
        const mesInicio = Number(conta.mesInicio || 0);

        if (mesSelecionado >= mesInicio) {
            if (conta.transacao === "Receita") totalEntradas += valor;
            if (conta.transacao === "Despesa") totalSaidas += valor;
        }
    });

    document.getElementById("entradaValor").innerText = formatarMoeda(totalEntradas);
    document.getElementById("saidaValor").innerText = formatarMoeda(totalSaidas);
    document.getElementById("saldoAtual").innerText = formatarMoeda(totalEntradas - totalSaidas);
}

function criarGrafico() {
    const transacoes = buscarTransacoes();
    const contasFixas = buscarContasFixas();

    const entradasMes = Array(12).fill(0);
    const saidasMes = Array(12).fill(0);

    transacoes.forEach((transacao) => {
        const data = new Date(transacao.data + "T00:00:00");
        const mes = data.getMonth();
        const valor = converterValor(transacao.valor);

        if (transacao.tipo === "entrada") entradasMes[mes] += valor;
        if (transacao.tipo === "saida") saidasMes[mes] += valor;
    });

    contasFixas.forEach((conta) => {
        const valor = converterValor(conta.valor);
        const mesInicio = Number(conta.mesInicio || 0);

        for (let mes = mesInicio; mes < 12; mes++) {
            if (conta.transacao === "Receita") entradasMes[mes] += valor;
            if (conta.transacao === "Despesa") saidasMes[mes] += valor;
        }
    });

    const ctx = document.getElementById("myChart");

    if (!ctx) return;

    if (graficoFinanceiro) {
        graficoFinanceiro.destroy();
    }

    graficoFinanceiro = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
            datasets: [
                {
                    label: "Entradas",
                    data: entradasMes,
                    backgroundColor: "#22C55E",
                    borderRadius: 8
                },
                {
                    label: "Saídas",
                    data: saidasMes,
                    backgroundColor: "#EF4444",
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "top"
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

botoesMes.forEach((botao) => {
    botao.addEventListener("click", function () {
        botoesMes.forEach((item) => item.classList.remove("ativo"));
        this.classList.add("ativo");

        mesAtual = this.dataset.mes;

        atualizarDashboard();
        criarGrafico();
    });
});

atualizarDashboard();
criarGrafico();