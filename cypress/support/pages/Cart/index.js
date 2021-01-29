const element = require('./elements').ELEMENTS;

class Cart {
    adicionarProdutoNoCarrinho() {
        cy.get(element.btn_add_cart).click();
        cy.get(element.total_price).should('have.text', '$29.00');
        cy.get(element.btn_purchase).click();
    }
}

export default new Cart();