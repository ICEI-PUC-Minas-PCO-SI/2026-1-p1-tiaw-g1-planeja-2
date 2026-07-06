# Plano de Testes de Software

## Objetivo

O Plano de Testes do sistema **Planeja+** tem como objetivo verificar se as funcionalidades implementadas atendem aos requisitos definidos para o projeto. Os testes foram realizados manualmente pelos integrantes da equipe, simulando situações reais de utilização da aplicação.

Foram avaliados os principais fluxos do sistema, como autenticação, gerenciamento financeiro, planejamento, visualização de informações e configurações do usuário.

## Cenários de Teste

Os cenários de teste foram definidos com base nas funcionalidades implementadas durante as Sprints 1 e 2.

Os testes foram realizados pelos integrantes da equipe utilizando navegadores modernos (Google Chrome e Microsoft Edge), verificando tanto a navegação entre as telas quanto o correto funcionamento das operações realizadas pelo usuário.

---

# CT-001 – Realizar Cadastro

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | RF-001 – O usuário deve conseguir realizar cadastro. |
| **Objetivo do teste** | Verificar se um novo usuário consegue criar uma conta no sistema. |
| **Passos** | 1. Abrir a aplicação Planeja+.<br>2. Selecionar **Criar conta**.<br>3. Informar nome, e-mail, senha e confirmação de senha.<br>4. Clicar em **Criar conta**. |
| **Critério de êxito** | A conta é criada e o usuário é direcionado para o login ou Dashboard. |
| **Responsável** | Arthur Willer Faria de Souza |

---

# CT-002 – Realizar Login

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | RF-002 – O usuário deve conseguir realizar login. |
| **Objetivo do teste** | Verificar se o usuário consegue acessar o sistema utilizando credenciais válidas. |
| **Passos** | 1. Abrir a aplicação.<br>2. Informar e-mail e senha.<br>3. Clicar em **Entrar**. |
| **Critério de êxito** | O Dashboard é carregado corretamente. |
| **Responsável** | Arthur Willer Faria de Souza |

---

# CT-003 – Visualizar Dashboard

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | Funcionalidade – Dashboard Financeiro. |
| **Objetivo do teste** | Verificar se o Dashboard apresenta corretamente o resumo financeiro do usuário. |
| **Passos** | 1. Realizar login.<br>2. Acessar o Dashboard.<br>3. Verificar saldo, receitas, despesas, gráficos e alertas. |
| **Critério de êxito** | Todas as informações financeiras são carregadas corretamente. |
| **Responsável** | Maria Eduarda Rodrigues Lacerda |

---

# CT-004 – Cadastrar Entrada

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | Funcionalidade – Cadastro de Receitas. |
| **Objetivo do teste** | Verificar se uma nova entrada financeira pode ser cadastrada. |
| **Passos** | 1. Acessar **Adicionar Entrada**.<br>2. Informar data, categoria, origem e valor.<br>3. Clicar em **Salvar**. |
| **Critério de êxito** | A entrada é cadastrada e o Dashboard é atualizado automaticamente. |
| **Responsável** | Christina Danúbia de Araújo Carreiro |

---

# CT-005 – Cadastrar Despesa

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | Funcionalidade – Cadastro de Despesas. |
| **Objetivo do teste** | Verificar se uma nova despesa pode ser cadastrada. |
| **Passos** | 1. Acessar **Adicionar Despesa**.<br>2. Informar os dados solicitados.<br>3. Salvar a despesa. |
| **Critério de êxito** | A despesa aparece na listagem e o saldo do Dashboard é recalculado. |
| **Responsável** | Christina Danúbia de Araújo Carreiro |

---

# CT-006 – Gerenciar Categorias

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | Funcionalidade – Gestão de Categorias. |
| **Objetivo do teste** | Verificar o cadastro, edição e exclusão de categorias. |
| **Passos** | 1. Abrir **Gerenciar Categorias**.<br>2. Criar uma nova categoria.<br>3. Editar seu nome.<br>4. Excluir a categoria. |
| **Critério de êxito** | As alterações são refletidas corretamente na lista de categorias. |
| **Responsável** | Victória Fernanda Santos Rocha |

---

# CT-007 – Gerenciar Metas Financeiras

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | Funcionalidade – Planejamento Geral e Planejamento Mensal. |
| **Objetivo do teste** | Verificar o cadastro e o acompanhamento de metas financeiras. |
| **Passos** | 1. Acessar Planejamento.<br>2. Criar uma nova meta.<br>3. Informar nome, valor e prazo.<br>4. Salvar. |
| **Critério de êxito** | A meta é cadastrada e seu progresso é apresentado corretamente. |
| **Responsável** | Luiza Stefany Romão da Silva |

---

# CT-008 – Visualizar Educação Financeira

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | Funcionalidade – Educação Financeira. |
| **Objetivo do teste** | Verificar se a tela apresenta dicas e cursos de educação financeira. |
| **Passos** | 1. Acessar **Educação Financeira**.<br>2. Visualizar dicas.<br>3. Visualizar os cursos disponíveis. |
| **Critério de êxito** | As dicas e cursos são apresentados corretamente ao usuário. |
| **Responsável** | Arthur Willer Faria de Souza e Luiza Stefany Romão da Silva |

---

# CT-009 – Alterar Status das Contas Fixas

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | Funcionalidade – Contas Fixas. |
| **Objetivo do teste** | Verificar se uma conta pode ser marcada como paga ou pendente. |
| **Passos** | 1. Acessar **Contas Fixas**.<br>2. Selecionar uma conta cadastrada.<br>3. Alterar seu status.<br>4. Salvar a alteração. |
| **Critério de êxito** | O novo status é exibido corretamente na tela. |
| **Responsável** | Victória Fernanda Santos Rocha |

---

# CT-010 – Alterar Dados do Perfil

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | RF-007 – O usuário deve conseguir editar seus dados pessoais. |
| **Objetivo do teste** | Verificar se o usuário consegue alterar suas informações pessoais. |
| **Passos** | 1. Acessar **Perfil**.<br>2. Alterar um ou mais dados.<br>3. Salvar as alterações. |
| **Critério de êxito** | Os novos dados são gravados e apresentados corretamente. |
| **Responsável** | Arthur Willer Faria de Souza |

---

# CT-011 – Alterar Configurações do Sistema

| Campo | Descrição |
| --- | --- |
| **Requisito associado** | RF-020 – O usuário deve conseguir configurar preferências do sistema. |
| **Objetivo do teste** | Verificar se as configurações da aplicação podem ser alteradas. |
| **Passos** | 1. Acessar **Configurações**.<br>2. Alterar idioma, tema ou notificações.<br>3. Salvar as alterações. |
| **Critério de êxito** | As configurações permanecem aplicadas após a alteração. |
| **Responsável** | Arthur Willer Faria de Souza |

---

# Ferramentas de Teste

Os testes foram realizados manualmente pelos integrantes da equipe utilizando os navegadores **Google Chrome** e **Microsoft Edge**.

Durante a validação da aplicação foram utilizadas as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap
- Chart.js
- LocalStorage

Não foram utilizadas ferramentas de automação de testes, sendo executados testes funcionais manuais para validação dos requisitos implementados.