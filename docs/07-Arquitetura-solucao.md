# Arquitetura de Solução

# Arquitetura da Solução

## Funcionalidades

### Funcionalidade 1 – Dicas de Educação Financeira

Permite ao usuário visualizar dicas de educação financeira atualizadas regularmente, auxiliando no desenvolvimento de hábitos financeiros saudáveis.

**Estrutura de dados:** Dicas Financeiras

**Instruções de acesso:**

1. Acesse o sistema.
2. No menu principal, selecione **Educação Financeira**.
3. Visualize as dicas disponíveis.

**Tela da funcionalidade:**

Tela de Educação Financeira.

---

### Funcionalidade 2 – Cadastro de Receitas e Despesas

Permite ao usuário cadastrar, consultar, editar e excluir receitas e despesas, informando data, descrição, categoria, forma de pagamento e valor.

**Estrutura de dados:** Transações

**Instruções de acesso:**

1. Acesse o menu principal.
2. Selecione **Transações**.
3. Clique em **Novo Lançamento**.
4. Informe os dados da receita ou despesa.
5. Salve o lançamento.

**Tela da funcionalidade:**

Tela de Transações.

---

### Funcionalidade 3 – Gestão de Metas Financeiras

Permite ao usuário criar, editar, acompanhar e excluir metas financeiras, possibilitando acompanhar o progresso em direção aos objetivos definidos.

**Estrutura de dados:** Metas

**Instruções de acesso:**

1. Acesse o menu principal.
2. Selecione **Metas Financeiras**.
3. Cadastre uma nova meta ou gerencie uma existente.

**Tela da funcionalidade:**

Tela de Metas Financeiras.

---

### Funcionalidade 4 – Resumo Financeiro

Permite ao usuário visualizar automaticamente o saldo total, o total de receitas e o total de despesas considerando o mês selecionado.

**Estrutura de dados:** Resumo Financeiro

**Instruções de acesso:**

1. Acesse o Dashboard.
2. Selecione o mês desejado.
3. Visualize o saldo, receitas e despesas do período.

**Tela da funcionalidade:**

Dashboard Financeiro.

---

### Funcionalidade 5 – Gestão de Categorias

Permite cadastrar, editar e excluir categorias personalizadas utilizadas na classificação das receitas e despesas.

**Estrutura de dados:** Categorias

**Instruções de acesso:**

1. Acesse o menu principal.
2. Selecione **Categorias**.
3. Cadastre uma nova categoria ou gerencie as existentes.

**Tela da funcionalidade:**

Tela de Categorias.

---

### Funcionalidade 6 – Alertas Financeiros

Permite ao usuário receber alertas automáticos sobre seu comportamento financeiro, identificando situações como gastos elevados, economia em determinada categoria e metas ultrapassadas.

**Estrutura de dados:** Alertas

**Instruções de acesso:**

1. Acesse o Dashboard.
2. Selecione o mês desejado.
3. Visualize os alertas gerados automaticamente.

**Tela da funcionalidade:**

Dashboard Financeiro.

---

### Funcionalidade 7 – Gráfico de Evolução da Meta

Permite visualizar a evolução do dinheiro guardado por meio de um gráfico de linha, indicando também quanto falta para atingir a meta financeira.

**Estrutura de dados:** Progresso da Meta

**Instruções de acesso:**

1. Acesse **Metas Financeiras**.
2. Selecione uma meta.
3. Visualize o gráfico de evolução.

**Tela da funcionalidade:**

Tela de Metas Financeiras.

---

### Funcionalidade 8 – Cursos de Educação Financeira

Permite visualizar cursos gratuitos sobre educação financeira e investimentos, direcionando o usuário para plataformas especializadas.

**Estrutura de dados:** Cursos

**Instruções de acesso:**

1. Acesse **Educação Financeira**.
2. Navegue até a seção **Cursos**.
3. Escolha um curso e acesse a plataforma indicada.

**Tela da funcionalidade:**

Tela de Educação Financeira.

---

### Funcionalidade 9 – Comparativo Mensal de Gastos

Permite visualizar um gráfico de barras comparando os gastos do mês atual com os meses anteriores.

**Estrutura de dados:** Comparativo Mensal

**Instruções de acesso:**

1. Acesse o Dashboard.
2. Selecione o mês desejado.
3. Visualize o gráfico comparativo.

**Tela da funcionalidade:**

Dashboard Financeiro.

---

### Funcionalidade 10 – Gerenciamento de Contas Fixas

Permite ao usuário visualizar suas contas fixas e atualizar seu status para **Paga** ou **Pendente**, facilitando o acompanhamento dos pagamentos recorrentes.

**Estrutura de dados:** Contas Fixas

**Instruções de acesso:**

1. Acesse o menu **Contas Fixas**.
2. Visualize as contas cadastradas.
3. Atualize o status de cada conta quando necessário.

**Tela da funcionalidade:**

Tela de Contas Fixas.

---

# Estruturas de Dados

## Estrutura de Dados – Dicas Financeiras

Conjunto de dicas de educação financeira exibidas ao usuário.

```
{
  "dicas": [
    {
      "titulo":"Controle seus gastos",
      "descricao":"Anote tudo que entra e sai durante o mês para entender para onde seu dinheiro está indo.",
      "tipo":"Planejamento"
    }
  ]
}
```

---

## Estrutura de Dados – Transações

Registra receitas e despesas do usuário.

```
{
  "transacoes": [
    {
      "id":1,
      "data":"2026-04-29",
      "descricao":"Salário",
      "categoria":"Salário",
      "tipo":"entrada",
      "formaPagamento":"Conta bancária",
      "valor":3000.00
    }
  ]
}
```

---

## Estrutura de Dados – Metas

Representa as metas financeiras cadastradas pelo usuário.

```
{
  "metas": [
    {
      "id":1,
      "nome":"Reserva de Emergência",
      "valorObjetivo":null,
      "valorAtual":1500,
      "prazo":null,
      "status":"ativa"
    }
  ]
}
```

---

## Estrutura de Dados – Resumo Financeiro

Armazena os valores consolidados do mês selecionado.

```
{
  "resumoFinanceiro": {
    "mes":"2026-05",
    "saldoTotal":2450.50,
    "totalEntradas":5000.00,
    "totalSaidas":2549.50
  }
}
```

---

## Estrutura de Dados – Categorias

Representa as categorias utilizadas para classificar receitas e despesas.

```
{
  "categorias": [
    {
      "id":1,
      "nome":"Alimentação",
      "icone":"icone-1"
    }
  ]
}
```

---

## Estrutura de Dados – Alertas

Representa os alertas financeiros emitidos pelo sistema.

```
{
  "alertas": [
    {
      "id":1,
      "tipo":"gasto_alto",
      "titulo":"Gastos acima do normal",
      "mensagem":"Você gastou 25% a mais do que no mês anterior.",
      "categoria":"geral",
      "nivel":"alto",
      "valorRelacionado":3900,
      "variacaoPercentual":25,
      "dataGeracao":"2026-05-24"
    }
  ]
}
```

---

## Estrutura de Dados – Progresso da Meta

Utilizada para gerar o gráfico de evolução da meta financeira.

```
{
  "progressoMeta": [
    {
      "mes":"Janeiro",
      "valorGuardado":500
    },
    {
      "mes":"Fevereiro",
      "valorGuardado":950
    }
  ]
}
```

---

## Estrutura de Dados – Cursos

Cursos disponibilizados na área de educação financeira.

```
{
  "cursos": [
    {
      "id":1,
      "titulo":"Curso de Educação Financeira Básica",
      "categoria":"Finanças",
      "plataforma":"Fundação Bradesco",
      "gratuito":true
    }
  ]
}
```

---

## Estrutura de Dados – Comparativo Mensal

Dados utilizados na construção do gráfico de barras.

```
{
  "comparativoMensal": [
    {
      "mes":"Março",
      "gastos":2200
    },
    {
      "mes":"Abril",
      "gastos":2600
    },
    {
      "mes":"Maio",
      "gastos":2450
    }
  ]
}
```

---

## Estrutura de Dados – Contas Fixas

Representa as contas recorrentes cadastradas pelo usuário.

```
{
  "contasFixas": [
    {
      "id":1,
      "data":"23/04/2026",
      "descricao":"Energia",
      "categoria":"Casa",
      "tipo":"Despesa",
      "formaPagamento":"Cartão de crédito",
      "valor":300.00,
      "status":false
    }
  ]
}
```

---

# Módulos e APIs

### Frameworks

- Bootstrap 5
- JavaScript (ES6)

### Bibliotecas

- Chart.js (gráficos de linha, barras e pizza)?

### Armazenamento

- LocalStorage

### APIs

Não foram utilizadas APIs externas. Todos os dados da aplicação são armazenados localmente por meio do LocalStorage.

---

# Hospedagem

O sistema foi desenvolvido como uma aplicação web utilizando HTML, CSS e JavaScript.

O código-fonte foi versionado utilizando Git