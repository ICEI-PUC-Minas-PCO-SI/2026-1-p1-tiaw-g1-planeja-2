# Plano de testes de software

| **Caso de teste**  | **CT-001 – Realizar Cadastro**  |
|:---: |:---: |
| Requisito associado | RF-001 - A aplicação deve apresentar, na página principal, a funcionalidade de cadastro de usuários para que estes consigam criar e gerenciar seu perfil. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site <br> - Clicar em "Cadastro" <br> - Preencher os campos obrigatórios (nome, e-mail, senha, confirmação de senha) <br> - Clicar em "Cadastrar" |
| Critério de êxito | -Cadastro realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Arthur Willer Faria de Souza. |

<br>

| **Caso de teste**  | **CT-002 – Efetuar login**  |
|:---: |:---: |
| Requisito associado | RF-002 - A aplicação deve possuir opção de fazer login, sendo o login o endereço de e-mail e senha. |
| Objetivo do teste | Verificar se o usuário consegue acessar o sistema utilizando credenciais válidas. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site <br> - Clicar no botão "Login" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Entrar" |
| Critério de êxito | - O Dashboard é carregado corretamente. |
| Responsável pela elaboração do caso de teste | Arthur Willer Faria de Souza. |

<br>

| **Caso de teste**  | **CT-003 – Visualizar Dashboard**  |
|:---: |:---: |
| Requisito associado | RF-016 - O usuário deve conseguir visualizar os dados das despesas e contas fixas no dashboard. |
| Objetivo do teste | Verificar se o Dashboard apresenta corretamente o saldo, as entradas, saídas, gráfico comparativo, e as contas fixas do mês selecionado e os alertas financeiros. |
| Passos | - Realizar login. <br> - Acessar o Dashboard <br> - Conferir as informações apresentadas. <br> - Comparar os valores exibidos com as transações cadastradas. <br> - Preencher o campo de senha <br> - Clicar em "Entrar" |
| Critério de êxito | - O Dashboard apresenta corretamente todas as informações financeiras do usuário.. |
| Responsável pela elaboração do caso de teste | Maria Eduarda Rodrigues Lacerda. |

<br>

| **Caso de teste**  | **CT-004 – Visualização das Transações**  |
|:---: |:---: |
| Requisito associado | RF-004 - O usuário deve conseguir alterar e excluir despesas E entradas. |
| Objetivo do teste | Verificar se o usuário consegue visualizar as entradas e saídas e fazer as alterações ou exclusão. |
| Passos | - Acessar a página de Transações <br> - Verificar se há ou não transação cadastrada <br> - Clicar em "editar" ou "excluir" transação <br> - Caso não haver nenhuma transação clicar em "Nova Transação".  |
| Critério de êxito | - A tabela de transações é atualizada corretamente. |
| Responsável pela elaboração do caso de teste | Christina Danúbia de Araújo Carreiro. |

<br>

| **Caso de teste**  | **CT-005 – Cadastro de Transações**  |
|:---: |:---: |
| Requisito associado | RF-003 - O usuário deve conseguir cadastrar despesas e entradas. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar novas transações. |
| Passos | - Acessar a página de Transações <br> - Clicar em "Nova Transação" <br> - Preencher os campos obrigatórios (data, descrição, categoria, valor, forma de pagamento e tipo de transação) <br> - Clicar em "Salvar" ou "Cancelar".  |
| Critério de êxito | - A tabela de transações é atualizada com a nova transação cadastrada. |
| Responsável pela elaboração do caso de teste | Christina Danúbia de Araújo Carreiro. |

<br>

| **Caso de teste**  | **CT-006 – Gerenciar Contas Fixas**  |
|:---: |:---: |
| Requisito associado | RF-014 - O usuário deve conseguir adicionar contas fixas. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar uma conta fixa. |
| Passos | - Acessar a página de Contas <br> - Preencher os campos obrigatórios (nome, mês, dia do vencimento, categoria, valor, forma de pagamento e tipo de transação) <br> - Clicar em "Salvar" ou "Cancelar". |
| Critério de êxito | - A tabela de contas fixas é atualizada e é possível visualizá-la na página do Dashboard. |
| Responsável pela elaboração do caso de teste | Victória Fernanda Santos Rocha. |

<br>

| **Caso de teste**  | **CT-007 – Cadastro de Metas**  |
|:---: |:---: |
| Requisito associado | RF-011 - O usuário deve conseguir cadastrar metas. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar uma nova meta financeira na página de Planejamento. |
| Passos | - Acessar a página de Planejamento <br> - Preencher os campos obrigatórios (nome da meta, valor objetivo, prazo de conclusão) <br> - Clicar no botão "Salvar". |
| Critério de êxito | - A meta cadastrada é exibida corretamente na área "Suas Metas Atuais". |
| Responsável pela elaboração do caso de teste | Luiza Stefany Romão da Silva. |

<br>

| **Caso de teste**  | **CT-008 – Editar e excluir Metas**  |
|:---: |:---: |
| Requisito associado | RF-012 - O usuário deve conseguir editar e excluir os dados das metas. |
| Objetivo do teste | Verificar se o usuário consegue editar as informações de uma meta cadastrada ou excluí-la da lista de metas. |
| Passos | - Acessar a página de Planejamento <br> - Localizar uma meta cadastrada em "Suas Metas Atuais" <br> - Clicar em "Editar" e alterar as informações da meta ou clicar em "Excluir" para removê-la. |
| Critério de êxito | - A meta é atualizada corretamente após a edição ou removida da lista após a exclusão. |
| Responsável pela elaboração do caso de teste | Luiza Stefany Romão da Silva. |

<br>

| **Caso de teste**  | **CT-009 – Visualizar Barra de Progresso e Gráfico da Meta**  |
|:---: |:---: |
| Requisito associado | RF-013 - O usuário deve conseguir visualizar a barra de progresso e gráfico da evolução das metas. |
| Objetivo do teste | Verificar se o usuário consegue acompanhar o progresso da meta por meio da barra de progresso e visualizar o gráfico de evolução. |
| Passos | - Acessar a página de Planejamento <br> - Localizar uma meta cadastrada em "Suas Metas Atuais" <br> - Verificar a barra de progresso exibida no card da meta <br> - Clicar em "Ver detalhes" <br> - Conferir a exibição do gráfico de evolução da meta |
| Critério de êxito | - A barra de progresso apresenta corretamente o percentual de conclusão da meta e o gráfico de evolução é exibido corretamente ao acessar os detalhes. |
| Responsável pela elaboração do caso de teste | Christina Danúbia de Araújo Carreiro. |

<br>

| **Caso de teste**  | **CT-010 – Cadastro de Categorias**  |
|:---: |:---: |
| Requisito associado | RF-017 - O usuário deve conseguir cadastrar categorias. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar uma nova categoria com nome e ícone. |
| Passos | - Acessar a página de Categorias <br> - Preencher o campo "Nome da Categoria" <br> - Selecionar um ícone disponível <br> - Clicar em "Salvar" |
| Critério de êxito | - A categoria cadastrada é exibida corretamente na lista de categorias. |
| Responsável pela elaboração do caso de teste | Victória Fernanda Santos Rocha. |

<br>

| **Caso de teste**  | **CT-011 – Editar e Excluir Categorias**  |
|:---: |:---: |
| Requisito associado | RF-019 - O usuário deve conseguir editar e excluir as categorias criadas. |
| Objetivo do teste | Verificar se o usuário consegue editar ou excluir uma categoria cadastrada. |
| Passos | - Acessar a página de Categorias <br> - Localizar uma categoria cadastrada na lista <br> - Clicar em "Editar" para alterar o nome ou ícone da categoria ou clicar em "Excluir" para removê-la |
| Critério de êxito | - A categoria é atualizada corretamente após a edição ou removida da lista após a exclusão. |
| Responsável pela elaboração do caso de teste | Victória Fernanda Santos Rocha. |

<br>

| **Caso de teste**  | **CT-012 – Visualizar Cursos e Dicas Financeiras**  |
|:---: |:---: |
| Requisito associado | RF-020 - O usuário deve conseguir visualizar os cursos e dicas financeiras. |
| Objetivo do teste | Verificar se o usuário consegue visualizar os cursos disponíveis, pesquisar e filtrar cursos por categoria, além de acessar as dicas financeiras. |
| Passos | - Acessar a página de Educação Financeira <br> - Verificar a exibição da lista de cursos disponíveis <br> - Utilizar o campo de pesquisa para localizar um curso <br> - Selecionar uma categoria no filtro <br> - Clicar em "Ver dicas" |
| Critério de êxito | - Os cursos são exibidos corretamente, a pesquisa e o filtro funcionam conforme esperado e as dicas financeiras são apresentadas ao usuário. |
| Responsável pela elaboração do caso de teste | Arthur Willer Faria de Souza e Luiza Stefany Romão da Silva. |

<br>

| **Caso de teste**  | **CT-013 – Avaliar e Acessar Cursos**  |
|:---: |:---: |
| Requisito associado | RF-021 - O usuário deve conseguir marcar como gostei ou não gostei e acessar os cursos disponíveis. |
| Objetivo do teste | Verificar se o usuário consegue avaliar um curso como "Gostei" ou "Não gostei" e acessar o conteúdo do curso selecionado. |
| Passos | - Acessar a página de Educação Financeira <br> - Localizar um curso disponível <br> - Clicar em "Gostei" ou "Não gostei" <br> - Verificar se a avaliação foi registrada <br> - Clicar em "Acessar Curso" |
| Critério de êxito | - A avaliação do curso é registrada corretamente e o usuário é redirecionado para o conteúdo do curso selecionado. |
| Responsável pela elaboração do caso de teste | Arthur Willer Faria de Souza e Luiza Stefany Romão da Silva. |

<br>

| **Caso de teste**  | **CT-014 – Visualizar Dados Cadastrais**  |
|:---: |:---: |
| Requisito associado | RF-006 - O usuário deve conseguir visualizar seus dados cadastrais. |
| Objetivo do teste | Verificar se o usuário consegue visualizar corretamente suas informações cadastrais na página "Meu Perfil". |
| Passos | - Realizar login na aplicação <br> - Acessar a página "Configurações" ou "Meu Perfil" <br> - Verificar se os dados cadastrados (foto, nome, e-mail, telefone, data de nascimento e gênero) são exibidos corretamente |
| Critério de êxito | - Todos os dados cadastrais do usuário são exibidos corretamente na tela. |
| Responsável pela elaboração do caso de teste | Arthur Willer Faria de Souza. |

<br>

| **Caso de teste**  | **CT-015 – Editar Dados Cadastrais**  |
|:---: |:---: |
| Requisito associado | RF-007 - O usuário deve conseguir editar seus dados pessoais. |
| Objetivo do teste | Verificar se o usuário consegue alterar suas informações pessoais e salvá-las com sucesso. |
| Passos | - Realizar login na aplicação <br> - Acessar a página "Configurações" ou "Meu Perfil" <br> - Alterar um ou mais campos (nome, e-mail, telefone, senha, data de nascimento, gênero ou foto de perfil) <br> - Clicar em "Salvar" |
| Critério de êxito | - As alterações realizadas são salvas e os novos dados são exibidos corretamente na página do perfil. |
| Responsável pela elaboração do caso de teste | Arthur Willer Faria de Souza. |

