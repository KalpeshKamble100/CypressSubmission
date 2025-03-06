describe('template spec', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  it('passes', () => {
    cy.viewport(1280, 1080)
    cy.visit('https://ir-staging.bombayrunning.com/')

    cy.contains('Cycling 20k').should('exist')
    cy.contains('Cycling 20k').click();
  
  })
})