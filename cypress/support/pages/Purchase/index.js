const element = require('./elements').ELEMENTS;

class Purchase {
    finalizarCompra() {
        cy.get(element.proceed_to_checkout).click();
        cy.get(element.check_terms).click();
        cy.get(element.proceed_to_checkout).click();
        cy.get(element.bank_wire).click();
        cy.get(element.finish_checkout).click();
        cy.get(element.title).should('have.text', 'Your order on My Store is complete.');
    }
}

export default new Purchase();