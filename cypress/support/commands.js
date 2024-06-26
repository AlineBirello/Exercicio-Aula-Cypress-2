Cypress.Commands. add('preCadastro' , (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()   
});


Cypress.Commands. add('login' , (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button') . click()
});

Cypress.Commands. add('checkout' , (nome, sobrenome, endereço, cidade, cep, telefone, email) => {
    cy.get('#billing_first_name').type(nome).tab();
    cy.get('#billing_last_name').type(sobrenome).tab();
    cy.get('#billing_address_1').type(endereço).tab();
    cy.get('#billing_city').type(cidade).tab();
    cy.get('#billing_postcode').type(cep).tab();
    cy.get('#billing_phone').type(telefone).tab();
    cy.get('#billing_email').type(email).tab();
    

})

