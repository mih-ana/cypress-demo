/// <reference types="cypress" />

//Preconditions: The user has signed in
before(() => {
  it('Valid SignIn', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.wait(5000)
    cy.location().should((location) => {
      expect(location.href).to.eq('https://www.saucedemo.com/')
    })
    cy.get('#user-name').click().type('standard_user').should('have.value', 'standard_user')
    cy.wait(2000)
    cy.get('#password').click().type('secret_sauce').should('have.value', 'secret_sauce')
    cy.wait(2000)
    cy.get('#login-button').click()
    cy.location().should((location) => {
      expect(location.href).to.eq('https://www.saucedemo.com/inventory.html')
    })
  })
})

describe('SortItems - Positive Tests', () => {
  //Get the dropdown before each test case; verify the value of the default option
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/inventory.html')
    cy.wait(2000)
    cy.get('.product_sort_container').should('have.value', 'az')
  })

  //Select the second dropdown option
  it('Select an option in the items dropdown', () => {
    cy.get('#inventory_filter_container > select').select('Name (Z to A)')
    cy.get('#inventory_filter_container > select > option:nth-child(2)').should('have.value', 'za')
  })
  
    /*   cy.get('.action-select-multiple')
         .select(['apples', 'oranges', 'bananas'])
         // when getting multiple values, invoke "val" method first
         .invoke('val')
         .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
   
       // Select option(s) with matching value
       cy.get('.action-select').select('fr-bananas')
         // can attach an assertion right away to the element
         .should('have.value', 'fr-bananas')
   
       cy.get('.action-select-multiple')
         .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
         .invoke('val')
         .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
   
       // assert the selected values include oranges
       cy.get('.action-select-multiple')
         .invoke('val').should('include', 'fr-oranges')
     })
     */
})