describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/AllMovie')
      cy.title().should('eq','Movie App')
      cy.get('table').contains('thead','tr','th','Movie Name')
      cy.get('table').contains('thead','tr','th','Theatre Name')
      cy.get('table').contains('thead','tr','th','Tickets Available')
      cy.get('table').contains('thead','tr','th','Ticket Status')
    })
  })