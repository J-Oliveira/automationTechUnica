#language: pt

Funcionalidade: Comprando Produtos dentro do site da Magazine Luiza

Cenário: Adicionar um produto com sucesso na sacola
    Dado que acesso o site da Magalu WEB
    Quando buscar um produto valido
    Então adiciono meu produto selecionado na sacola com sucesso

Cenário: Buscando por um produto que não existe
    Dado que acesso o site da Magalu WEB
    Quando buscar por um produto que não existe
    Então é retornado uma mensagem que não foi encontrado

Cenário: Encontrando um produto por uma palavra chave
    Dado que acesso o site da Magalu WEB
    Quando buscar por um produto pela palavra chave
    Então adiciono o produto sugerido na sacola
