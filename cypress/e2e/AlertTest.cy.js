/// <reference types="cypress" />

import AlertComponentPage from "../PageObject/AlertComponentPAge"
describe('Testbox componentTest tesing applicatio Text', () => {

    //const text=new TextboxComponentPage()
    const alert=new AlertComponentPage()
    beforeEach(() => {
        cy.visit('/')
    })
  
    
    it('Verify Netural Alert Component ', () => {
        alert.verifyNeutralAlert()
        alert.verifyNeutralICon()
        alert.verifyNeutralText()
        alert.verifyNeutralMessageText()
        alert.getNeutralAlert()
                
     })
   
      
    it('Verify Info Alert Component ', () => {
        alert.verifyInfoAlert()
        alert.verifyInfoICon()
        alert.verifyInfoText()
        alert.verifyInfoMessageText()
        alert.getInfoAlert()
        alert.getInfoMessageAlert('For your informatio','Info','This alert is for displaying information.')

    })
    it('Verify InfoMessage Alert Component ', () => {
      
        alert.getInfoMessageAlert('For your informatio','Info','You should read this message.')

    })


    it('Verify Error Alert Component ', () => {
        alert.verifyErrorAlert()
        alert.verifyErrorICon()
        alert.verifyErrorText()
        alert.verifyErrorMessageText()
        alert.getErrorAlert() 

    })
    it('Verify DataError Alert Component ', () => {
        alert.getDataErrorAlert('Error','DataError','A problem has been occurred while submitting your data.')
    })
    it('Verify Warning Alert Component ', () => {
             
        alert.verifyWarningAlert()
        alert.verifyWarningICon()
        alert.verifyWarningText()
        alert.verifyWarningMessageText()
        alert.getWarningAlert()          

    })

    it('Verify Warning Alert Component ', () => {
             
        alert.verifyWarningAlert()
        alert.verifyWarningICon()
        alert.verifyWarningText()
        alert.verifyWarningMessageText()
        alert.getWarningAlert()          

    })

    it('Verify Hot drink Alert Component ', () => {
             
        alert.getHotDrinkAlert('Warning','Hot drink',
        'Please be careful, your drink will be hot.')          

    })
    it('Verify Success Alert Component ', () => {
             
                   
        alert.verifySuccessAlert()
        alert.verifySuccessICon()
        alert.verifySuccessText()
        alert.verifySuccessMessageText()
        alert.getSuccessAlert() 

    })

    it('Verify Success Loginlong Alert Component ', () => {
             
                   
        
        alert.getSuccessAlert() 

    })


    it('Verify Success Login Alert Component ', () => {
             
        alert.getSuccessLoginAlert('Success','Success Login',
       'You are successfully logged in.')      
           

    })

    it('Verify Success LoginLongMessage Alert Component ', () => {
             
        alert.getSuccessLoginLongMessageAlert('Success','Success LoginLong message',
        '12!£$%^&*You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in .You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in. You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.You are successfully logged in.')      
           

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