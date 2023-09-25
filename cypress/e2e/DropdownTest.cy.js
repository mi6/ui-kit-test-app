/// <reference types="cypress" />
import DropdownComponentPage from "../PageObject/DropDownComponentPage"

describe('DropDown ComponentTest', () => {
    const drop=new DropdownComponentPage()
       beforeEach(() => {
        cy.visit('/')
    })
  
    
    it('Verify Dropdown  Component ', () => {
        drop.selectDropdown('Double Espresso')
        cy.wait(2000)
        
                
     })
     it('Verify Dropdown  Component ', () => {
        drop.selectDropdown('Americano')
        cy.wait(2000)

        
                
     })
      
     it('Verify Dropdown  Component ', () => {
        drop.selectDropdown('Cappuccino')
        cy.wait(2000)

        
                
     })
     it('Verify Dropdown  Component ', () => {
        drop.selectDropdown('Double Espresso')
        cy.wait(2000)

        
                
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