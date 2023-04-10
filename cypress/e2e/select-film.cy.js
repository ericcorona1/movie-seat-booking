describe('option select', () => {
    it('selects option from drop down', () => {
      cy.visit('/')
      cy.get('select option')
      .its('length')
  // pick a random number between 0 and n-1
  // using the Lodash _.random function
      .then((n) => Cypress._.random(0, n - 1))
  // print the picked random number
      .should('be.a', 'number')
  // and then use the cy.select command
  // to select it from the element
      .then((index) => {
        cy.get('select').select(index)
      })
// confirm the selected value
    cy.get('select')
      .invoke('val')
      .should('be.oneOf', ['10', '12', '8', '9'])
  })
})