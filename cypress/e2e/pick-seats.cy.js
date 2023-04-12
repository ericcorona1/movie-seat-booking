describe('pick seats', () => {
    it('picks multiple seats', () => {
      cy.visit('/');
      let numSeats;
      cy.get('.row > .seat:not(.occupied)')
        .then(($seats) => {
          numSeats = Cypress._.random(2, 5); // Select between 2-5 seats
          const selectedSeats = Cypress._.sampleSize($seats, numSeats); // Select random seats
          selectedSeats.forEach(($seat) => {
            cy.wrap($seat).click(); // Click on the seat
          });
          cy.get('#count')
            .invoke('text')
            .should('equal', numSeats.toString()); // Verify that the count matches the number of selected seats
        });
    });
  });