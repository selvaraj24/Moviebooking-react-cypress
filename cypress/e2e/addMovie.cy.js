describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/AddMovieForm')
      cy.title().should('eq','Movie App')
      cy.contains('Submit').click();
      cy.get('[id="_id"]').should('exist')
      cy.get('[id="movieName"]').should('exist')
      cy.get('[id="theatreName"]').should('exist')
      cy.get('[id="noOfTicketsAvailable"]').should('exist')
      cy.get('[id="ticketsStatus"]').should('exist')
    })
    it('passes', () => {
      cy.visit('http://localhost:3000/AddMovieForm')
      cy.title().should('eq','Movie App')
      cy.contains('Submit').click();
      cy.get('[id="_id"]').type('123')
      cy.get('[id="movieName"]').type('Leo')
      cy.get('[id="theatreName"]').type('Vetri')
      cy.get('[id="noOfTicketsAvailable"]').type('123')
      cy.get('[id="ticketsStatus"]').type('Booked ASAP')
      cy.get('[type="submit"]').click();
    })
  })