describe('template spec', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  it('passes', () => {
    cy.viewport(1280, 1080)
    cy.visit('https://indiarunning-organizer-dashboard-staging.bombayrunning.com/')

    cy.get('.w-\\[20rem\\] > .justify-start > .flex > #email').type('kalpesh60@mailinator.com');
    cy.get('.w-\\[20rem\\] > .justify-start > .flex > .mt-4').click();

    cy.get('#otp0').type('1');
    cy.get('#otp1').type('2');
    cy.get('#otp2').type('3');
    cy.get('#otp3').type('4');
    cy.get('.py-5 > form.w-full > .w-full').click();

    cy.get('div').contains('Create Event').click();

    cy.get('[id="Event Name_text"]').type('Marathon');
    cy.get('[id="On-Ground"]').click();
    cy.get('[id="Address_text"]').type('Bandra');
    cy.get('[id="Area_text"]').type('East');
    cy.get('[id="City_text"]').type('Mumbai');
    cy.get('[id="State_text"]').type('Maharashtra');
    cy.get('[id="PinCode"]').type('410209');

    cy.get('[id="event_start_date"]').click();

    // cy.get('div').contains('Save and Proceed').click();
  
  })
})