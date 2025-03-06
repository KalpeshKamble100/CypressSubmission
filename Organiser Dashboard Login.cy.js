describe('template spec', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  it('passes', () => {
    cy.viewport(1280, 1080)
    cy.visit('https://indiarunning-organizer-dashboard-staging.bombayrunning.com/')

    cy.get('.w-\\[20rem\\] > .justify-start > .flex > #email').type('kalpesh70@mailinator.com');
    cy.get('.w-\\[20rem\\] > .justify-start > .flex > .mt-4').click();

    cy.get('#otp0').type('1');
    cy.get('#otp1').type('2');
    cy.get('#otp2').type('3');
    cy.get('#otp3').type('4');
    cy.get('.py-5 > form.w-full > .w-full').click();

    cy.get('[id="firstName"]').type('Kalpesh');
    cy.get('[id="lastName"]').type('Kamble');
    cy.get('[type="tel"]').type('1111111111');
    cy.get('[id="organization-name"]').type('CB');
    cy.get('button').contains('Continue'). click();

    cy.get('#otp0').type('1');
    cy.get('#otp1').type('2');
    cy.get('#otp2').type('3');
    cy.get('#otp3').type('4');
    cy.get('.py-5 > form.w-full > .w-full').click();
  
    cy.contains('Dashboard').should('exist')
  })
})