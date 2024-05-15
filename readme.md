
Olá sejam bem vindos senhores avaliadores !!!

**Projeto de Automação com Cypress**

Este projeto contém testes de automação desenvolvidos com o framework Cypress para testar a aplicação de Automação Tela de Login

1. **Pré-requisitos**

Instale os seguintes itens:
Visual Studio Code  =  https://code.visualstudio.com/download
Node.js             =  https://nodejs.org/en/download
NPM

Obs.: Utilize as versões mais recentes.
Obs 2: Ao instalar o Node.js o NPM é instalado automaticamente.


2. **Configuração do Ambiente**

* Faça o clone do projeto via HTTPS.

* Abra o Visual Studio Code, clique em Clone Repository, cole a url do projeto.

* Abra o terminal (Ctrl + J).

* Instale as dependências do projeto digitando: 'npm install'

* Na raiz do projeto crie um arquivo chamado cypress.env.json e cole as seguintes informações:
{
"Username":"student",
"Password":"Password123"
}
* Obs.: Certifique-se de que foi criado fora de qualquer pasta, caso não esteja o projeto não irá funcionar. Por fim salve as alterações (Ctrl + S)

3. **Executando os Testes**

* No terminal digite 'npm test' - (Modo Headless) - Visuaização somente na no terminal

* 'npm run cy:open' Modo Interativo - (Cypress Test Runner) - Visualização a parte

4. **Estrutura do Projeto**

* login.cy.js               contém a suite de testes para automação
* commands.js               contém os elementos inspecionados que serão usados na suite
* e2e.js                    contém o import da classe commands.js
* .gitignore                contém qualquer dado que não ira subir para o repositório
* cypress.config.js         contém a base URL fixa, podendo ser chamada em qualquer teste, sem a necessidade de altera-la.
* cypress.env.example.json  contém exemplos de usuário e senha, que este sim irá subir para o repositório.
* cypress.env.json          contém dados sensíveis reais que, não vão para o repositório
package.json                contém verão do projeto e autor do mesmo
* readme.md                 contém todas informações de como rodar este projeto

**FIM**