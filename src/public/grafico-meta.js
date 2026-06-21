
function carregarGrafico() {

fetch("metas.json")
    .then(response => response.json())
    .then(data => {

        const meta = data.metas[0];

    const percentual = (meta.valorAtual / meta.valorObjetivo) * 100;

    document.getElementById("progresso").style.width = percentual + "%";

    document.getElementById("percentual").textContent = percentual.toFixed(0) + "% concluído";

    document
    .getElementById("barraMeta")
    .addEventListener("click", () => {

    alert(`${percentual.toFixed(0)}% da meta concluída`);

});



    const labels = meta.historico.map(item => item.mes);

    const valores = meta.historico.map(item => item.valor);

    const ctx = document.getElementById("graficoMeta");

    console.log(ctx);

    new Chart(ctx, {

    type: "line",

    data: {

        labels: labels,

        datasets: [
            {

                label:
                    meta.nome,

                data: valores,

                borderColor: "#2563EB",

                backgroundColor: "#DBEAFE",
                
                borderWidth: 3,

                tension: 0.3
            }
        ]
    },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            
            onClick(event, elements) {

                if (elements.length > 0) {

                    const indice = elements[0].index;

                    alert(
                    `${labels[indice]}: R$ ${valores[indice]}`
                    );
                }
            },
              interaction: {
                mode: 'index',
                intersect: false
            },
                
            
            scales: {
            
                
                y: {
                  beginAtZero: true
                }

               
            } 
        }
    });

    
});

}

window.onload = carregarGrafico;


