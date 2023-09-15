
//// <reference types="Cypress" />

class AlertPage{
    //this function  check Neutral Alert line
    verifyNeutralAlert(){
        cy.get('[heading="Neutral"]').should('be.visible')
    }
    //this function verify Neutral(?)ICon 
    verifyNeutralICon(){
        cy.get('[heading="Neutral"]').shadow().find('.alert-icon.svg-container.icon-neutral').
        should('be.visible')
       
    }
    //this function verify Neutral text
    verifyNeutralText(){
        cy.get('[heading="Neutral"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
        should('be.visible').contains('Neutral')

    }
    //this function verify  Neutral Alert Message Text
    verifyNeutralMessageText(){
        cy.get('[heading="Neutral"]').shadow().find('.ic-typography-body.hydrated').
        should('be.visible').contains('This alert is for displaying miscellaneous messages.')
         

    }
    //this function verify whole Neutral functionality like Icon,NeutralText,and Message
    getNeutralAlert(){
        cy.get('[heading="Neutral"]').should('be.visible')
        cy.get('[heading="Neutral"]').shadow().find('.container.container-neutral')
       .should('be.visible')
        cy.get('[heading="Neutral"]').shadow().find('.alert-icon.svg-container.icon-neutral').
        should('be.visible')
        cy.get('[heading="Neutral"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
        should('be.visible').contains('Neutral')
        cy.get('[heading="Neutral"]').shadow().find('.ic-typography-body.hydrated').
        should('be.visible').contains('This alert is for displaying miscellaneous messages.')
             
    }
    
   
        
  //this function  check Info Alert line
    verifyInfoAlert(){
        cy.get('[variant="info"]').should('be.visible')
    }
    //this function verify Info(i)ICon 
    verifyInfoICon(){
        cy.get('[variant="info"]').shadow().find('.alert-icon.svg-container.icon-info').
        should('be.visible')
        cy.get('[variant="info"]').shadow().find('#info-title').
        contains('For your information')
       
    }
    //this function verify Info text
    verifyInfoText(){
        cy.get('[variant="info"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
        should('be.visible').contains('Info')

    }
    //this function verify Info Alert Message Text
    verifyInfoMessageText(){
        cy.get('[variant="info"]').shadow().find('.alert-message').
        should('be.visible').contains('This alert is for displaying information.')
         

    }
    //this function verify whole Info functionality like Icon,InfoText,and Message
    getInfoAlert(){
        cy.get('[variant="info"]').should('be.visible')
        cy.get('[variant="info"]').shadow().find('.ic-typography-body.hydrated').
        should('be.visible')
        cy.get('[variant="info"]').shadow().find('.alert-icon.svg-container.icon-info').
        should('be.visible')
        cy.get('[variant="info"]').shadow().find('#info-title').
        contains('For your information')
        cy.get('[variant="info"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
        should('be.visible').contains('Info')
        cy.get('[variant="info"]').shadow().find('.alert-message').
        should('be.visible').contains('This alert is for displaying information.')
         
    }
    
     //this function check all Error Alert line
    verifyErrorAlert(){
        cy.get('[variant="error"]').should('be.visible')
    }
    
    //this function verify Error(x)ICon 
    verifyErrorICon(){
        cy.get('[variant="error"]').shadow().find('.alert-icon.svg-container.icon-error').
        should('be.visible')
        cy.get('[variant="error"]').shadow().find('#error-title').
        contains('Error')

        
    }
    
    //this function verify Error text
    verifyErrorText(){
        cy.get('[variant="error"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
        should('be.visible').contains('Error')

    }
    //this function verify  Error Alert Message Text
    verifyErrorMessageText(){
        cy.get('[variant="error"]').shadow().find('.ic-typography-body.hydrated').
        should('be.visible').contains('This alert is for displaying errors.')
         

    }
    //this function verify Error whole functionality like Icon,Error,and Message
    getErrorAlert(){
        cy.get('[variant="error"]').should('be.visible')
        cy.get('[variant="error"]').shadow().find('.alert-icon.svg-container.icon-error').
        should('be.visible')
        cy.get('[variant="error"]').shadow().find('#error-title').
        contains('Error')
         cy.get('[variant="error"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
        should('be.visible').contains('Error')
        cy.get('[variant="error"]').shadow().find('.ic-typography-body.hydrated').
        should('be.visible').contains('This alert is for displaying errors.')
           

    }
    

     //this function check all Warning Alert line
    verifyWarningAlert(){
     cy.get('[variant="warning"]').should('be.visible')
    }

    //this function verify Warning(!)ICon 
      verifyWarningICon(){
     cy.get('[variant="warning"]').shadow().find('.alert-icon.svg-container.icon-warning').
     should('be.visible')
     cy.get('[variant="warning"]').shadow().find('#warning-title').
     contains('Warning')

    
    }

    //this function verify Warning text
    verifyWarningText(){
    cy.get('[variant="warning"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
    should('be.visible').contains('Warning')

    }
   //this function verify  Warning Alert Message Text
    verifyWarningMessageText(){
    cy.get('[variant="warning"]').shadow().find('.ic-typography-body.hydrated').
    should('be.visible').contains('This alert is for displaying warnings.')
     

   }
   //this function verify Warning functionality like Icon,Warning,and Message
    getWarningAlert(){
   
    cy.get('[variant="warning"]').should('be.visible')
    cy.get('[variant="warning"]').shadow().find('.alert-icon.svg-container.icon-warning').
    should('be.visible')
    cy.get('[variant="warning"]').shadow().find('#warning-title').
    contains('Warning')
    cy.get('[variant="warning"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
    should('be.visible').contains('Warning')
    cy.get('[variant="warning"]').shadow().find('.ic-typography-body.hydrated').
    should('be.visible').contains('This alert is for displaying warnings.')
     

   }

   //this function check all Success Alert line
    verifySuccessAlert(){
     cy.get('[variant="success"]').should('be.visible')
    }

    //this function verify Success()ICon 
      verifySuccessICon(){
     cy.get('[variant="success"]').shadow().find('.alert-icon.svg-container.icon-success').
     should('be.visible')
     cy.get('[variant="success"]').shadow().find('#success-title').
     contains('Success')

    
    }

    //this function verify Success text
    verifySuccessText(){
    cy.get('[variant="success"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
    should('be.visible').contains('Success')

    }
   //this function verify  Success Alert Message Text
    verifySuccessMessageText(){
    cy.get('[variant="success"]').shadow().find('.ic-typography-body.hydrated').
    should('be.visible').contains('This alert is for displaying success messages.')
     

   }
   //this function verify Warning functionality like Icon,Warning,and Message
    getSuccessAlert(){

    cy.get('[variant="success"]').should('be.visible')
    cy.get('[variant="success"]').shadow().find('.alert-icon.svg-container.icon-success').
     should('be.visible')
    cy.get('[variant="success"]').shadow().find('#success-title').
     contains('Success')
    cy.get('[variant="success"]').shadow().find('.alert-title.ic-typography-subtitle-large.hydrated').
    should('be.visible').contains('Success')
    cy.get('[variant="success"]').shadow().find('.ic-typography-body.hydrated').
    should('be.visible').contains('This alert is for displaying success messages.')
    


   }



   




   




}
export default AlertPage;