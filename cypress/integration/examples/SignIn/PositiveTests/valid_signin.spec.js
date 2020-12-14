/// <reference types="cypress" />

describe('SignIn - Positive Tests', () => {
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