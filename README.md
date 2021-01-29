## Desafio de conhecimento
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/clevsampaio/challenge-cypress/nodejs?style=for-the-badge)

Este projeto é exclusivamente para desafios de conhecimento para abordar estrutura, estilo de código, boas práticas e 
soluções para automação de testes na linguagem JavaScript.

### O que foi utilizado?

O projeto foi construido com a estrutura [Cypress](https://www.cypress.io/), [Node.js](https://nodejs.org/en/) e algumas dependências como:
[Cypress](https://www.npmjs.com/package/cypress), 
[Cypress Allure Plugin](https://www.npmjs.com/package/@shelex/cypress-allure-plugin), 
[Faker](https://www.npmjs.com/package/faker).

### Como executar?

Para executar em sua máquina local, basta utilizar o comando `npm run cy:run`.
Para gerar reporte, basta utilizar o comando `npm run allure:report`.
Para abrir o reporte em seu navegador, basta utilizar o comando `npm run allure:open`.
Para limpar os resultados gerados pelo reporte, basta utilizar o comando `allure:clear`.
Para executar todos os comandos acima, basta utilizar o comando `npm test`.