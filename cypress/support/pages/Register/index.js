const element = require('./elements').ELEMENTS;
const faker = require("faker");

class Register {
    realizarCadastro() {
        cy.get(element.input_email).type(faker.internet.email());

        cy.server();
        cy.route('POST', '**/index.php').as('auth');

        cy.get(element.btn_register).click();

        cy.wait('@auth').then((xhr) => {
            expect(xhr.status).be.eq(200);
        });

        cy.get(element.first_name).type(faker.name.firstName());
        cy.get(element.last_name).type(faker.name.lastName());
        cy.get(element.password).type(faker.internet.password());
        cy.get(element.address).type(faker.address.streetAddress());
        cy.get(element.city).type(faker.address.city());
        cy.get(element.state).select('Alaska');
        cy.get(element.zip_code).type(12345);
        cy.get(element.phone_mobile).type(faker.phone.phoneNumberFormat());
        cy.get(element.btn_register_confirm).click();
    }
}

export default new Register();