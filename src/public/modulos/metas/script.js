document.getElementById("prazo").min =
    new Date().toISOString().split("T")[0];

const form = document.getElementById("formMeta");
const listaMetas = document.getElementById("listaMetas");

let metas = JSON.parse(localStorage.getItem("metas")) || [];

metas = metas.map(meta => ({
    ...meta,
    valorObjetivo: Number(meta.valorObjetivo) || 0,
    valorAtual: Number(meta.valorAtual) || 0,
    historico: meta.historico || [
        {
            data: new Date().toLocaleDateString(),
            valor: Number(meta.valorAtual) || 0
        }
    ]
}));

let editando = null;

function salvarLocalStorage() {

    localStorage.setItem(
        "metas",
        JSON.stringify(metas)
    );

}

let detalheAberto = null;
let graficos = [];

function mostrarMetas() {

    listaMetas.innerHTML = "";

    graficos.forEach(grafico => grafico.destroy());
    graficos = [];

    if (metas.length === 0) {

        listaMetas.innerHTML = `

        <div class="sem-metas">
            Nenhuma meta cadastrada.
        </div>

        `;

        return;
    }

    metas.forEach((meta, index) => {

        let falta = meta.valorObjetivo - meta.valorAtual;

        if (falta < 0) {
            falta = 0;
        }

        const percentual =
            meta.valorObjetivo > 0
                ? (meta.valorAtual / meta.valorObjetivo) * 100
                : 0;

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

                <div class="barra">
                    <div class="progresso" style="width: ${percentual}%"></div>
                </div>

                <p class="percentual">
                    ${percentual.toFixed(0)}% concluído
                </p>



                <button class="btn-detalhes" onclick="abrirDetalhes(${index})">
                    ${detalheAberto === index
                ? "Ocultar detalhes"
                : "Ver detalhes"
            }
                </button>

                ${detalheAberto === index
                ? `
                        <div class="detalhes-meta">
                            
                            <h3 class="titulo-grafico">Evolução da Meta</h3>

                            <canvas id="grafico-${index}" class="grafico-meta"></canvas>

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
                    `
                : ""
            }
            </div>
        `;
    });

    if (detalheAberto !== null) {
        setTimeout(() => {
            criarGrafico(detalheAberto);
        }, 0);
    }
}

function abrirDetalhes(index) {
    if (detalheAberto === index) {
        detalheAberto = null;
    } else {
        detalheAberto = index;
    }

    mostrarMetas();
}

function criarGrafico(index) {

    const meta = metas[index];

    const canvas = document.getElementById(`grafico-${index}`);

    if (!canvas) return;

    if (!meta.historico) {
        meta.historico = [
            {
                data: new Date().toLocaleDateString(),
                valor: meta.valorAtual
            }
        ];
    }

    const grafico = new Chart(canvas, {

        type: "line",

        data: {

            labels: meta.historico.map(item => item.data),

            datasets: [

                {

                    label: "Valor Guardado",

                    data: meta.historico.map(item => item.valor),

                    borderColor: "#2563EB",

                    backgroundColor: "rgba(37,99,235,0.15)",

                    fill: true,

                    borderWidth: 3,

                    tension: 0.35,

                    pointRadius: 5,

                    pointBackgroundColor: "#2563EB"

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

    graficos.push(grafico);

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

        valorAtual: 0,

        historico: [
            {
                data: new Date().toLocaleDateString(),
                valor: 0
            }
        ]
    };

    if (editando !== null) {

        meta.valorAtual = metas[editando].valorAtual;
        meta.historico = metas[editando].historico;
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

    if (valor === 0) {

        alert(
            "Digite um valor diferente de zero."
        );

        return;
    }

    if (metas[index].valorAtual + valor < 0) {

        alert("O valor atual não pode ficar negativo.");

        return;
    }

    metas[index].valorAtual += valor;

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

    localStorage.setItem("transacoes", JSON.stringify(transacoes));

    metas[index].historico.push({
        data: new Date().toLocaleDateString(),
        valor: metas[index].valorAtual
    });

    salvarLocalStorage();

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

/*BARRA DE PROGRESSO*/

function mostrarPercentual(percentual) {

    alert(`Você já concluiu ${percentual}% da sua meta.`);

}

function limparFormulario() {

    form.reset();

    editando = null;

}

mostrarMetas();