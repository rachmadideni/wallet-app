/// <reference types="cypress" />

describe("", ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000/signup')
  })

  it('should displayed toggle buttons group', ()=>{
    cy.get('button').contains('email');
    cy.get('button').contains('phone');
  })

  it('should show the default active state for email button', () => {    
    cy.get('button').contains('email').should('have.class', ['toggle-button','active'])
  })
})

export {}