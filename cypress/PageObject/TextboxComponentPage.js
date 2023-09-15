//// <reference types="Cypress" />
//<reference type="Cypress iframe"/>
class TextboxComponentPage{

//locaters


//Page Action

verifyApplicationLogo(){
    cy.get('[slot="app-icon"]').should('be.visible')
}
verifyApplicationName(){
    cy.get('[app-title="Application Name"]').should('be.visible')

}
verifyApplicationLogo_Name(){
    cy.get('ic-top-navigation.hydrated').should('be.visible')

}
verifyTextboxHeaderText(){
    cy.get('ic-text-field.hydrated').shadow().contains('Enter a name to be greeted below').should('be.visible')
    cy.get('ic-text-field.hydrated').shadow().contains('Name').should('be.visible')

}
getTextboxField(name){
    //verify Textbox field is visibale and type data
    cy.get('ic-text-field.hydrated').shadow().find('ic-input-component-container').last().should('be.visible').type(name)
        
    //verify submit  button should  be display and clickable
    cy.get('ic-button.hydrated').shadow().find('.button').should('be.visible').click()

    //after clicking on submit button should get message "Hello",with concatenate with above data 
     cy.get('ic-typography.hydrated').contains('Hello,',name).should('be.visible')
     .reload()

}

 


 }






export default TextboxComponentPage;
