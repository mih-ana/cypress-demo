/// <reference types="cypress" />

describe('SignUp - Positive Tests', () => {
    it('Valid SignUp', () => {
        cy.visit('https://courses.ultimateqa.com/users/sign_up')
        cy.wait(15000)
        cy.get('#user[first_name]').click().type('FirstName')
        cy.wait(5000)
        cy.get('#user[last_name]').click().type('LastName')
        cy.wait(5000)
        cy.get('#user[email]').click().type('genericemail@example.test')
        cy.wait(5000)
        cy.get('#user[password').click().type('123456!@#A')
        cy.wait(5000)
        cy.get('#user[terms]').click().check()
        cy.wait(5000)
        cy.get('input[type=submit]').click()
    })
})