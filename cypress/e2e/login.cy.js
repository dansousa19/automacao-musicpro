describe('Teste de Login', () => {
  beforeEach(() => {
      cy.visit('practice-test-login/')
  })
  
  it('positiveLoginTest', () => {
      cy.positiveLogInTest()
      cy.url().should('contain', `${Cypress.config('baseUrl')}logged-in-successfully/`)
      cy.get('strong').should('have.text', 'Congratulations student. You successfully logged in!')
      cy.get('.wp-block-button__link').should('be.visible')
  })

  it('negativeUsernameTest', () => {
      cy.negativeUsernameTest()
      cy.get('#error').should('be.visible').should('have.text', 'Your username is invalid!')
  })

  it('negativePasswordTest', () => {
      cy.negativePasswordTest()
      cy.get('#error').should('be.visible').should('have.text', 'Your password is invalid!')
  })
})