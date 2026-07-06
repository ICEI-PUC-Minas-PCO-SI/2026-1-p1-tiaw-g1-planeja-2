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

    const saldoAtual = totalEntradas - totalSaidas;

    document.getElementById("entradaValor").innerText = formatarMoeda(totalEntradas);
    document.getElementById("saidaValor").innerText = formatarMoeda(totalSaidas);
    document.getElementById("saldoAtual").innerText = formatarMoeda(saldoAtual);

    const icone =
        document.getElementById("iconeAlerta");

    const titulo =
        document.getElementById("tituloAlerta");

    const mensagem =
        document.getElementById("mensagemAlerta");

    if (totalEntradas === 0 && totalSaidas === 0) {

        icone.innerHTML = `<i class="fa-solid fa-circle-info"></i>`;
        icone.style.background = "#E5E7EB";

        titulo.innerText = "Sem movimentação";

        mensagem.innerText =
            "Ainda não há entradas ou saídas neste mês.";

    } else if (totalSaidas > totalEntradas) {

        const diferenca = totalSaidas - totalEntradas;

        icone.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
        icone.style.background = "#FEF3C7";

        titulo.innerText = "Atenção";

        mensagem.innerHTML = `
        Você está gastando
        <strong>${formatarMoeda(diferenca)}</strong>
        acima da sua renda.
    `;

    } else if (totalEntradas > 0 && totalSaidas >= totalEntradas * 0.8) {

        icone.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        icone.style.background = "#fedbdb";

        titulo.innerText = "Cuidado";

        mensagem.innerText = "Você já utilizou mais de 80% da sua renda este mês.";

    } else {

        icone.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        icone.style.background = "#DCFCE7";

        titulo.innerText = "Tudo certo";

        mensagem.innerText = "Suas despesas estão dentro do planejado.";

    }
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

atualizarDashboard();
criarGrafico();