// Botões dos meses
const botoesMes = document.querySelectorAll(".mes-btn");

// mes atual
let mesAtual = "jan";

// dados financeiros
const dadosFinanceiros = {


    jan: {
        entradas: [1000, 50],
        saidas: [20]
    },


    fev: {
        entradas: [20.500],
        saidas: [70, 20]
    },


    mar: {
        entradas: [800],
        saidas: [100]
    },


    abr: {
        entradas: [],
        saidas: []
    },


    mai: {
        entradas: [],
        saidas: []
    },


    jun: {
        entradas: [],
        saidas: []
    },


    jul: {
        entradas: [],
        saidas: []
    },


    ago: {
        entradas: [],
        saidas: []
    },


    set: {
        entradas: [],
        saidas: []
    },


    out: {
        entradas: [],
        saidas: []
    },


    nov: {
        entradas: [],
        saidas: []
    },


    dez: {
        entradas: [],
        saidas: []
    }


};




// soma valores
function somarValores(lista) {


    let total = 0;


    for (let i = 0; i < lista.length; i++) {


        total += lista[i];


    }


    return total;


}


// Converção modeda
function formatarMoeda(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


// atualizar a tela
function atualizarDashboard() {


    // Dados do mês atual
    const dadosMes = dadosFinanceiros[mesAtual];


    // Soma entradas
    const totalEntradas =
        somarValores(dadosMes.entradas);


    // Soma saídas
    const totalSaidas =
        somarValores(dadosMes.saidas);


    // Calcula saldo atual
    const saldoAtual =
        totalEntradas - totalSaidas;


    // Atualiza os valores na tela
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
