const produtoRepository = require("../repository/produto_repository")

async function listar() {
    return await produtoRepository.listar();
}

async function inserir(produto) {
    //Validar se produto tem nome e preço
    if(produto && produto.nome && produto.preco){
        return await produtoRepository.inserir(produto);
    }
    else {
        //Erro
        throw { id: 400, msg: "Produto sem dados corretos"};
    }


}

async function buscarPorId(id) {
    let produto = await produtoRepository.buscarPorId(id);
    if(produto) {
        return produto;
    }
    else {
        throw { id: 404, msg: "Produto não encontrado!"};
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId
}