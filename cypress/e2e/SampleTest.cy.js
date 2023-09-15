/// <reference types="cypress" />

// Welcome to Cypress!

describe('Testing Localhost 5173 Application Page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Verify application logo ', () => {

          cy.get('[slot="app-icon"]').should('be.visible')
      
          })

    it('Verify application Name  ', () => {

            cy.get('[app-title="Application Name"]').should('be.visible')
        
          })     
    it('Verify application Name and Logo togather ', () => {

           cy.get('ic-top-navigation.hydrated').should('be.visible')
    
          })    
  
      

     it('Verify Text "Enter a name to be greeted below"&"Name"', () => {

           cy.get('ic-text-field.hydrated').shadow().contains('Enter a name to be greeted below').should('be.visible')
           cy.get('ic-text-field.hydrated').shadow().contains('Name').should('be.visible')

           
        
            })

      it('Verify TextBox field is visible  and  Enter a name and click On submit button and verify message "Hello', () => {

        cy.get('ic-text-field.hydrated').shadow().find('ic-input-component-container').last().should('be.visible').type('World')
        
        cy.get('ic-button.hydrated').shadow().find('.button').should('be.visible').click()

         cy.get('ic-typography.hydrated').contains('Hello,','World').should('be.visible')

              
           
           })
           
           describe('ally', () => {
            beforeEach(() => {
            cy.injectAxe()

            })
            it('should have no detectable ally error on page load ', () => {

                        cy.checkA11y()
             
                 
            })    
               

            })
      

    })