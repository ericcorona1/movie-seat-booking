describe('pick seats', () => {
    it('picks multiple seats', () => {
      cy.visit('/');
      cy.get('.row > .seat:not(.occupied)')
        .then(($seats) => {
          let numSeats = Cypress._.random(2, 5); // Select between 2-5 seats
          const selectedSeats = Cypress._.sampleSize($seats, numSeats); // Select random seats
          selectedSeats.forEach(($seat) => {
            cy.wrap($seat).click(); // Click on the seat
          });
        })
        .then(() => {
            cy.get('#count')
              .invoke('val')
              .should('have.value', numSeats); // Verify that the count matches the number of selected seats
          });
        });
  