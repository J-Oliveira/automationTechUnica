/* global Given, When, Then*/

import qaMagalu from "../pageobjects/comprandoProdutoPage";

const magaluQA = new qaMagalu()

// Cenário: Adicionar um produto com sucesso na sacola //
Given("que acesso o site da Magalu WEB", () => {
    magaluQA.acessarSite();
});

When("buscar um produto valido", () => {
    magaluQA.buscarProdutoValido();
});

Then("adiciono meu produto selecionado na sacola com sucesso", () => {
    magaluQA.selecionandoProduto();
});

// Cenário: Buscando por um produto que não existe //
When("buscar por um produto que não existe", () => {
    magaluQA.buscarProdutoInvalido();
});

Then("é retornado uma mensagem que não foi encontrado", () => {
    magaluQA.validartxtNaoEncontrado();
});

// Cenário: Encontrando um produto por uma palavra chave //
When("buscar por um produto pela palavra chave", () => {
    magaluQA.buscarProdutoChave();
});

Then("adiciono o produto sugerido na sacola", () => {
    magaluQA.selecionandoProdutoChave();
});