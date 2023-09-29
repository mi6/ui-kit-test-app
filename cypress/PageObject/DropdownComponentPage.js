//// <reference types="Cypress" />


class DropdownComponentPage{



    selectDropdown(dropdown){
        cy.get('ic-select.hydrated').should('be.visible')
        cy.get('ic-select.hydrated').shadow().find('.expand-icon').click()
       cy.screenshot()
         
      cy.get('ic-select').shadow().find('ic-menu ul li')
      .should('be.visible').should('have.length','6')
      .each(($t1,index,$bt)=>{
        cy.log($t1.text())
      })
      cy.get('ic-select').shadow().find('ic-menu ul li').should('be.visible')
      .each(function($t1,index,$bt){
    
        if($t1.text()==dropdown){
            cy.wrap($t1).click({force:true}).contains(dropdown).should('have.text',dropdown)
    
        }
        
      })

     cy.screenshot()
      

    }


    
}
export default DropdownComponentPage;