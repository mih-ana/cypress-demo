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

describe('MainMenuNavigations - Positive Tests', () => {
    //Get the navbar and click on it before each test case
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/inventory.html')
        cy.wait(2000)
        cy.get('#menu_button_container > div > div:nth-child(3) > div > button').contains('Open Menu').click()
        cy.wait(2000)
        cy.get('.bm-menu').should('exist')
    })

    //Reload the page
    // it('Reload the page', () => {
    //     cy.reload()
    // })

    //Click on the All Items menu item
    // it('Click on the All Items menu item', () => {
    //     cy.get('#inventory_sidebar_link').click()
    //     cy.wait(2000)
    //     cy.location().should((location) => {
    //         expect(location.href).to.eq('https://www.saucedemo.com/inventory.html')
    //     })
    // })

    //Click on the About menu item, then go back - The user should be redirected to the Inventory page
    // it('Click on the About menu item', () => {
    //     cy.get('#about_sidebar_link').click()
    //     cy.wait(2000)
    //     cy.url().should('eq','https://saucelabs.com/')
    //     cy.go('back')
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    //})

    //Click on the About menu item, then go back, go forward and go back again - The user should be redirected to the Inventory page
    // it('Click on the About menu item', () => {
    //     cy.get('#about_sidebar_link').click()
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://saucelabs.com/')
    //     cy.go('back')
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    //     cy.go('forward')
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://saucelabs.com/')
    //     cy.go('back')
    //     cy.wait(2000)
    //     cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    // })

    //     //Close the navbar by clicking on the 'x' button - The navbar should be closed
        it('Close the navbar by clicking on the button', () => {
            cy.get('#menu_button_container > div > div.bm-menu-wrap > div:nth-child(2) > div > button').click()
            cy.wait(2000)
            cy.get('.bm-menu').should('not.be.visible')
        })

    //     //Close the navbar by clicking anywhere on the page - The navbar should be closed
    //     it('Close the navbar by clicking anywhere on the page', () => {
    //         cy.get('#menu_button_container > div > div.bm-overlay').click()
    //         cy.wait(2000)
    //         cy.get('.bm-menu').should('not.be.visible')
    //     })

    //     //Click on the Logout menu item - The user should be logged out
    //     it('Click on the Logout menu item', () => {
    //         cy.get('#logout_sidebar_link').click()
    //         cy.wait(2000)
    //         expect(location.href).to.eq('https://www.saucedemo.com/index.html')
    //     })
    // })


})