/// <reference types="cypress" />

it('should be able to add a new todo to the list', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh')

  cy.get('.new-todo', { timeout: 6000 }).type("Hello World with Cypress{enter}")
  cy.get('label').should('have.text', 'Hello World with Cypress')
  cy.get('.toggle').should('not.be.checked')
  cy.get('.toggle').click()
  cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

  // Find piece of strings
  cy.contains('Clear').click()
  cy.get('.todo-list').should('not.have.descendants', 'li');
})