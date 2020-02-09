/// <reference types="cypress" />

describe('filtering', () => {
    beforeEach(() => {
      cy.visit('http://todomvc-app-for-testing.surge.sh')

      cy.get('.new-todo').type("Hello World with Cypress{enter}")
      cy.get('.new-todo').type("Learn JS{enter}")
      cy.get('.new-todo').type("Using Cy{enter}")

      cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('should filters "Active" todos', () => {
      cy.contains('Active').click()
      cy.get('.todo-list li').should('have.length', 2)
    })

    it('should filters "Completed" todos', () => {
      cy.contains('Completed').click()
      cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filters "All" todos', () => {
      cy.contains('All').click()
      cy.get('.todo-list li').should('have.length', 3)
    })
  })