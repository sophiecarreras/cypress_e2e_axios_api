describe('Search Engine Test', () => {
  it('Performs a search and checks the first result', () => {
    cy.visit('https://duckduckgo.com');

    cy.get('#search_form_input_homepage')
      .type('The dev-friendly football API')

    cy.get('#search_button_homepage')
      .click();

    cy.get('[data-testid="result-title-a"]')
      .invoke('attr', 'href')
      .then((url) => {
      expect(url).to.eq('https://www.football-data.org/');
    });

    cy.get('[data-testid="result-title-a"]')
      .first()
      .click()

      cy.url({ timeout: 10000 }).should('eq', 'https://www.football-data.org/');
  });
});