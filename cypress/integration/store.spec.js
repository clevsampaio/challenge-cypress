/// <reference types="cypress" />

import Home from '../support/pages/Home';
import Product from '../support/pages/Product';
import Cart from '../support/pages/Cart';
import Register from '../support/pages/Register';
import Purchase from '../support/pages/Purchase';
import Logout from '../support/pages/Logout';

describe('My Store', () => {
    it('deve buscar produto, adicionar no carrinho, realizar cadastro e finalizar compra', () => {
        cy.visit('http://automationpractice.com');
        Home.buscarProduto();
        Product.selecionarProduto();
        Cart.adicionarProdutoNoCarrinho();
        Register.realizarCadastro();
        Purchase.finalizarCompra();
        Logout.desconectar();
    });
});