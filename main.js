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
    try{
        await produtoService.inserir(produto1);
    } catch (err) {
        console.log("Erro: ", err.msg);
    }
    try {
        await produtoService.inserir(produto2);
    } catch (err) {
        console.log("Erro: ", err.msg);
    }
    try{ 
        await produtoService.inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
    } catch (err) {
        console.log("Erro: ", err.msg);
    }
    try {
        await produtoService.inserir({nome:"Coca-cola", categoria:"Bebida"});
            } catch (err) {
        console.log("Erro: ", err.msg);
    }
    try {
        await produtoService.inserir({nome:"Detergente", categoria:"Limpeza", preco:2.5});
    } catch (err) {
        console.log("Erro: ", err.msg);
    }

    try {
        let produtoId1 = await produtoService.buscarPorId(1);
        console.log("Produto Id=1: ", produtoId1);
    }
    catch(err) {
        console.log("Erro: ", err.msg);
    }

    try {
        let produtoId100 = await produtoService.buscarPorId(100);
        console.log("Produto Id=100: ", produtoId100);
    }
    catch(err) {
        console.log("Erro: ", err.msg);
    }

    console.log(await produtoService.listar());
}

main();