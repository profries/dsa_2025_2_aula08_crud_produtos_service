const produtoService = require("./service/produto_service")

async function main() {
    let produto1 = {
        nome: "Arroz",
        categoria: "Alimento",
        preco: 4.5
    };
    
    let produto2 = {
        nome: "Coca-cola 2L",
        categoria: "Bebida",
        preco: 10.8
    };
    //Inserindo produto1 (id=1)
    try{
        produto1 = await produtoService.inserir(produto1);
        console.log("Produto inserido", produto1)
    } catch (err) {
        console.log("Erro: ", err.msg);
    }
    //Inserindo produto2 (id=2)
    try {
        produto2 = await produtoService.inserir(produto2);
        console.log("Produto inserido", produto2)
    } catch (err) {
        console.log("Erro: ", err.msg);
    }
    //Inserindo produto3 (id=3)
    try{ 
        const produto3 = await produtoService.inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
        console.log("Produto inserido", produto3);
    } catch (err) {
        console.log("Erro: ", err.msg);
    }
    //Inserindo produto4 - Vai dar erro, pois não tem preço
    try {
        const produto4 = await produtoService.inserir({nome:"Coca-cola", categoria:"Bebida"});
        console.log("Produto inserido", produto4);
    } catch (err) {
        console.log("Erro: ", err.msg);
    }
    //Inserindo produto5 (id=4)
    try {
        const produto5 = await produtoService.inserir({nome:"Detergente", categoria:"Limpeza", preco:2.5});
        console.log("Produto inserido", produto5);
    } catch (err) {
        console.log("Erro: ", err.msg);
    }
    
    //Lista de produtos inicial
    console.log("Lista inicial: ", await produtoService.listar());

    //Buscando produto com id=1 (Arroz)
    try {
        let produtoId1 = await produtoService.buscarPorId(1);
        console.log("Produto Id=1: ", produtoId1);
    }
    catch(err) {
        console.log("Erro: ", err.msg);
    }

    //Buscando produto com id=100 - Erro: Produto não encontrado!
    try {
        let produtoId100 = await produtoService.buscarPorId(100);
        console.log("Produto Id=100: ", produtoId100);
    }
    catch(err) {
        console.log("Erro: ", err.msg);
    }

    //Atualizar o preço do produto com id=3 (feijao)
    try{
        console.log("Atualizando ID=3",
            await produtoService.atualizar(3, {nome:"Feijao", categoria:"Alimento", preco:8.5}));
    } catch(err) {
        console.log("Erro", err.msg);
    }

    //Deletar o produto com id=4 (detergente)
    try{
        console.log("Deletando o ID=4", await produtoService.deletar(4));
    } catch(err) {
        console.log("Erro", err.msg);
    }

    //Lista de produtos final (sem detergente e preco do feijao atualizado)
    console.log("Lista final: ", await produtoService.listar());
}

main();