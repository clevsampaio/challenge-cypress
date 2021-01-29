const element = require('./elements').ELEMENTS;

class Product {
    selecionarProduto() {
        cy.get(element.item_product).click();
        cy.get(element.item_price).should('have.text', '$27.00');
    }
}

export default new Product();