let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];

const table = document.getElementById('transactionTable');

const form = document.getElementById('transactionForm');

let editandoId = localStorage.getItem('editandoId');

function salvarLocalStorage() {
    localStorage.setItem('transacoes', JSON.stringify(transacoes));
}


function formatarValor(valor, tipo) {
    const numero = Number(valor);
    const simbolo = tipo === 'entrada' ? '+' : '-';
    return `${simbolo} R$ ${numero.toFixed(2).replace('.', ',')}`;
}


function renderizarTabela() {
    if (!table) {
        return;
    }

    table.innerHTML = '';

    if (transacoes.length === 0) {
        table.innerHTML = `
      <tr>
        <td colspan="7">Nenhuma transação cadastrada.</td>
      </tr>
    `;
        return;
    }

    transacoes.forEach((transacao) => {
        const linha = document.createElement('tr');
        const classeValor = transacao.tipo === 'entrada' ? 'valor-entrada' : 'valor-saida';
        linha.innerHTML = `
      <td>${transacao.data}</td>
      <td>${transacao.descricao}</td>
      <td>${transacao.categoria}</td>
      <td>${transacao.tipo}</td>
      <td>${transacao.formaPagamento}</td>
      <td class="${classeValor}">
        ${formatarValor(transacao.valor, transacao.tipo)}
      </td>

      <td>
        <div class="action-buttons">
          <button class="btn-edit" onclick="editarTransacao(${transacao.id})">
            Editar
          </button>
          <button class="btn-delete" onclick="excluirTransacao(${transacao.id})">
            Excluir
          </button>
        </div>
      </td>
    `;
        table.appendChild(linha);
    });
}

if (form) {
    if (editandoId) {
        const transacao = transacoes.find((item) => item.id == editandoId);
        if (transacao) {
            document.getElementById('data').value = transacao.data;
            document.getElementById('descricao').value = transacao.descricao;
            document.getElementById('categoria').value = transacao.categoria;
            document.getElementById('valor').value = transacao.valor;
            document.getElementById('formaPagamento').value = transacao.formaPagamento;
            document.getElementById('tipo').value = transacao.tipo;
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = document.getElementById('data').value;
        const descricao = document.getElementById('descricao').value;
        const categoria = document.getElementById('categoria').value;
        const valorInput = document.getElementById('valor').value;
        const formaPagamento = document.getElementById('formaPagamento').value;
        const tipo = document.getElementById('tipo').value;
        const valor = parseFloat(valorInput.replace(',', '.'));

        if (
            !data ||
            !descricao ||
            !categoria ||
            !formaPagamento ||
            !tipo
        ) {
            alert('Preencha todos os campos.');
            return;
        }

        if (isNaN(valor) || valor <= 0) {
            alert('Informe um valor válido.');
            return;
        }

        const novaTransacao = {
            id:
                editandoId
                    ? Number(editandoId)
                    : Date.now(),
            data,
            descricao,
            categoria,
            valor,
            formaPagamento,
            tipo
        };

        if (editandoId) {
            transacoes =
                transacoes.map((transacao) =>
                    transacao.id == editandoId
                        ? novaTransacao
                        : transacao
                );
            localStorage.removeItem('editandoId');
        } else {
            transacoes.push(novaTransacao);
        }

        salvarLocalStorage();

        window.location.href =
            'index.html';
    });
}

function excluirTransacao(id) {
    const confirmar = confirm('Deseja excluir esta transação?');
    if (!confirmar) {
        return;
    }
    transacoes =
        transacoes.filter(
            (transacao) =>
                transacao.id !== id
        );
    salvarLocalStorage();
    renderizarTabela();
}

function editarTransacao(id) {
    localStorage.setItem(
        'editandoId',
        id
    );
    window.location.href = 'nova-transacao.html';
}

renderizarTabela();