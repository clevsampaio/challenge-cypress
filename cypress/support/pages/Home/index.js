const element = require('./elements').ELEMENTS;

class Home {
    buscarProduto() {
        cy.get(element.input_search).type('Blouse');
        cy.get(element.btn_search).click();
    }
}

export default new Home();