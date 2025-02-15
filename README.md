Este projeto implementa uma API REST simplificada para controle de tarefas. A API permite realizar operações básicas de gerenciamento de tarefas em um banco de dados PostgreSQL.

Funcionalidades
Criar uma tarefa: Permite adicionar uma nova tarefa.
Excluir uma tarefa: Permite excluir uma tarefa existente.
Listar todas as tarefas: Exibe todas as tarefas cadastradas.
Tecnologias Utilizadas
Node.js: Ambiente de execução para JavaScript.
Express: Framework web para Node.js.
PostgreSQL: Banco de dados relacional utilizado para persistir as tarefas.
pg (node-postgres): Biblioteca Node.js para interação com o PostgreSQL.
Como Rodar o Projeto
1. Clone o repositório
git clone https://github.com/EveliseRibino/tarefas-api-Atividade-de-Integração-com-SGDB.git

2. Instale as dependências
Acesse o diretório do projeto e instale as dependências utilizando o npm:

cd tarefas-api-Atividade-de-Integração-com-SGDB

npm install

3. Configuração do Banco de Dados
Certifique-se de ter o PostgreSQL instalado e configurado em sua máquina. Você precisa criar um banco de dados chamado tarefas e configurar o arquivo .env com as credenciais adequadas.

Exemplo do arquivo .env:
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=tarefas
DB_PASSWORD=suasenha
DB_PORT=5432

4. Inicie o servidor
Com as dependências instaladas e o banco de dados configurado, inicie o servidor:

npm start

A API ficará disponível em http://localhost:3000.

Endpoints
1. GET /tarefas
Retorna a lista de todas as tarefas cadastradas.

2. POST /tarefas
Cria uma nova tarefa.

3. PUT /tarefas/:id
Atualiza uma tarefa existente com o id especificado.
Exemplo de requisição:
PUT http://localhost:3000/tarefas/1

4. DELETE /tarefas/:id
Exclui a tarefa com o id especificado.
Exemplo de requisição:
DELETE http://localhost:3000/tarefas/1

Licença
Este projeto está sob a licença MIT.



