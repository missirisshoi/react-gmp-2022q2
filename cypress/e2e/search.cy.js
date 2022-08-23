describe('Search flow testing', () => {
  it('visits the search page', () => {
    cy.visit('/');
  });

  it('should have the search field and button', () => {
    cy.get('[data-test-id="search-field"]').should('have.value', '');
    cy.get('[data-test-id="search-button"]').should('exist');
  });

  it('should change search field value', () => {
    cy.get('[data-test-id="search-field"]').type('pirates').should('have.value', 'pirates');
  });

  it('should change url when search button is clicked', () => {
    cy.get('[data-test-id="search-button"]').click();
    cy.url().should('include', '/search=pirates');
  });

  it('should update the movies amount', () => {
    cy.get('[data-test-id="search-amount"]').should('have.text', '6');
  });

  it('should update the movies list', () => {
    cy.get('[data-test-id="movie-title"]').each(($el) => {cy.wrap($el).contains('pirates', { matchCase: false })});
  });
});
