const element = require('./elements').ELEMENTS;

class Logout {
    desconectar() {
        cy.get(element.btn_logout).click();
        cy.get(element.title).should('have.text', 'Authentication');
    }
}

export default new Logout();