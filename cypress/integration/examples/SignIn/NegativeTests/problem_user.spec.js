/// <reference types="cypress" />

describe('SignIn - Negative Tests', () => {
    it('Valid SignIn', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.wait(5000)
        cy.location().should((location) => {
            expect(location.href).to.eq('https://www.saucedemo.com/')
        })
        cy.get('#user-name').click().type('problem_user').should('have.value', 'problem_user')
        cy.wait(2000)
        cy.get('#password').click().type('secret_sauce').should('have.value', 'secret_sauce')
        cy.wait(2000)
        cy.get('#login-button').click()
        cy.location().should((location) => {
            expect(location.href).to.eq('https://www.saucedemo.com/inventory.html')
        })
        cy.get('#item_4_img_link > img').should('have.attr', 'src').should('have.value','./img/sauce-backpack-1200x1500.jpg')
    })
})