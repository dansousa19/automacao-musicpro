Cypress.Commands.add('positiveLogInTest', (
    usuario = Cypress.env('Username'),
    senha = Cypress.env('Password')
    ) => {
    cy.get('#username').type(usuario) //log:false impede que dados não serão inseridos no coonsole
    cy.get('#password').type(senha)
    cy.get('#submit').click()
})

Cypress.Commands.add('negativeUsernameTest', (
    senha = Cypress.env('Password')
    ) => {
    cy.get('#username').type('incorrectUser')
    cy.get('#password').type(senha)
    cy.get('#submit').click()
})

Cypress.Commands.add('negativePasswordTest', (
    usuario = Cypress.env('Username')
    ) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type('errado')
    cy.get('#submit').click()
})