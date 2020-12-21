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
  it('Select the second option in the items dropdown', () => {
    cy.get('.product_sort_container').select('Name (Z to A)').should('have.value', 'za')
  })

  //Select the third dropdown option
  it('Select the third option in the items dropdown', () => {
    cy.get('.product_sort_container').select('Price (low to high)').should('have.value', 'lohi')
  })

  //Select the fourth dropdown option
  it('Select the fourth option in the items dropdown', () => {
    cy.get('.product_sort_container').select('Price (high to low)').should('have.value', 'hilo')
  })
})