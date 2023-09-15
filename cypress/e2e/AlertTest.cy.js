/// <reference types="cypress" />

import TextboxComponentPage from "../PageObject/TextboxComponentPage"
import AlertPage from "../PageObject/AlertComponentPage"
describe('Testbox componentTest tesing applicatio Text', () => {

    const text=new TextboxComponentPage()
    const alert=new AlertPage()
    beforeEach(() => {
        cy.visit('/')
    })
  
    
      it('call function from PageObject page Alert ', () => {
        alert.verifyNeutralAlert()
        alert.verifyNeutralICon()
        alert.verifyNeutralText()
        alert.verifyNeutralMessageText()
        alert.getNeutralAlert()
        alert.verifyInfoAlert()
        alert.verifyInfoICon()
        alert.verifyInfoText()
        alert.verifyInfoMessageText()
        alert.getInfoAlert()
        alert.verifyErrorAlert()
        alert.verifyErrorICon()
        alert.verifyErrorText()
        alert.verifyErrorMessageText()
        alert.getErrorAlert()
        alert.verifyWarningAlert()
        alert.verifyWarningICon()
        alert.verifyWarningText()
        alert.verifyWarningMessageText()
        alert.getWarningAlert()
        alert.verifySuccessAlert()
        alert.verifySuccessICon()
        alert.verifySuccessText()
        alert.verifySuccessMessageText()
        alert.getSuccessAlert()

        


           
           })
   
      
           
             
                   
    
            
          
    
      



    })