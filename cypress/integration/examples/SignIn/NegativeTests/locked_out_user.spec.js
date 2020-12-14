/// <reference types="cypress" />

describe('SignIn - Negative Tests', () => {
    it('Valid SignIn', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.wait(5000)
        cy.get('#user-name').click().type('locked_out_user').should('have.value', 'locked_out_user')
        cy.wait(2000)
        cy.get('#password').click().type('secret_sauce').should('have.value', 'secret_sauce')
        cy.wait(2000)
        cy.get('#login-button').click()
        cy.location().should((location) => {
            expect(location.href).to.eq('https://www.saucedemo.com/inventory.html')
        })
    })
})