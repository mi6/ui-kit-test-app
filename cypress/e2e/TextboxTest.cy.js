/// <reference types="cypress" />

import TextboxComponentPage from "../PageObject/TextboxComponentPage"

describe('Testbox componentTest tesing applicatio Text', () => {

    const text=new TextboxComponentPage()
    beforeEach(() => {
        cy.visit('/')
    })
  
    
      it('call function from PageObject page ', () => {
            text.verifyApplicationLogo()
            text.verifyApplicationName()
            text.verifyApplicationLogo_Name()
            text.verifyTextboxHeaderText()

            text.getTextboxField('Test123')  
            text.getTextboxField('World')  
            text.getTextboxField('Jhon$@')
            text.getTextboxField('Krish£*')
            text.getTextboxField('Mike?')
            text.getTextboxField('Sam*^%$£')



           
           })
   
      
           
           describe('ally', () => {
                beforeEach(() => {
                cy.injectAxe()
    
                })
                it('should have no detectable ally error on page load ', () => {
    
                            cy.checkA11y(null,{includedImpacts:['critical']})
                 
                     
                })    
                   
    
                })
          
    
      



    })