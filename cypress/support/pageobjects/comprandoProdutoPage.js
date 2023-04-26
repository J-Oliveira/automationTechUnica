/// <reference types="Cypress"/>

import aplicationMagaluElements from "../elements/comprandoProdutoElements";

const ambiente = Cypress.config("baseUrl")
const magaluAplication = new aplicationMagaluElements;

class qaMagalu {

// Cenário: Adicionar um produto com sucesso na sacola //
acessarSite() {
    cy.visit(ambiente)
    cy.wait(3000)
}

buscarProdutoValido() {
    cy.get(magaluAplication.lbl_buscar()).type('Apple iPhone 14 Pro Max 128GB Roxo-profundo 6,7” 48MP{enter}')
    cy.wait(2000)
    cy.contains('Resultados para apple iphone 14 pro max 128gb roxo profundo 67 48mp')
}

selecionandoProduto() {
    cy.get(magaluAplication.btn_produtoSelecionado()).click()
    cy.get(magaluAplication.btn_addSacola()).click()
    cy.get(magaluAplication.btn_irSacola()).click()
    cy.wait(2000)
    cy.get(magaluAplication.txt_produtoSacola()).should("be.visible")
    cy.screenshot()
}

// Cenário: Buscando por um produto que não existe //
buscarProdutoInvalido() {
    cy.get(magaluAplication.lbl_buscar()).type('3456fffffff#@@@@@@@{enter}')
}

validartxtNaoEncontrado() {
    cy.contains('Sua busca por "3456fffffff" não encontrou resultado algum :(')
    cy.screenshot()
}

// Cenário: Encontrando um produto por uma palavra chave //
buscarProdutoChave() {
    cy.get(magaluAplication.lbl_buscar()).type('Janela que proteje de mosquito{enter}')
    cy.wait(2000)
    cy.contains('Resultados para janela que proteje de mosquito')
}

selecionandoProdutoChave() {
    cy.get(magaluAplication.btn_produtoChave()).click()
    cy.get(magaluAplication.btn_addSacola()).click()
    cy.get(magaluAplication.txt_produtoSacola()).should("be.visible")
    cy.screenshot()
}

}
export default qaMagalu
