const itemController = require("../../../src/controllers/item");


QUnit.module('itemController'); 


function salvarItem(item, callback) {
    itemController.salvarItem(item).then(resposta => callback(resposta.mensagem)) 
}

// QUnit.test('Salvar Itens (Atributos ok)', assert => {
    
//     const done = assert.async();

//     salvarItem({
//         titulo: "Castanha do Pará",
//         preco: 3.0
//     }, res => {
//         const esperado = "Item salvo com sucesso";
//         assert.equal(res, esperado, "Resultado");
//         done();
//     });
// });

QUnit.test('Salvar Itens (Preco não ok)', assert => {
    
    const done = assert.async();

    salvarItem({
        titulo: "Leite Condensado",
        preco: null
    }, res => {
        const esperado = "Falha no servidor, favor tentar mais tarde";
        assert.equal(res, esperado, "Resultado");
        done();
    });
});

QUnit.test('Salvar Itens (Titulo não ok)', assert => {
    
    const done = assert.async();

    salvarItem({
        preco: 5.0
    }, res => {
        const esperado = "Falha no servidor, favor tentar mais tarde";
        assert.equal(res, esperado, "Resultado");
        done();
    });
});

QUnit.test('Somatorio de preços (Parâmetro ok)', assert => {
    const itens = [{preco: 2}, {preco: 5}, {preco: 8}, {preco: 9}, {preco: 10}]
    assert.equal(itemController.somatorioPreco(itens), 34, "Resultado");
});

QUnit.test('Somatorio de preços (Parâmetro ok)', assert => {
    const itens = [{preco: 2}]
    assert.equal(itemController.somatorioPreco(itens), 2, "Resultado");
});

function buscarTodosItens(callback) {
    itemController.buscarTodosItens().then(itens => {
        callback(typeof itens[0]);
    });    
}

QUnit.test('Buscar todos os itens', assert => {
    const done = assert.async();

    buscarTodosItens(res => {
        assert.equal(res, typeof {}, "Resultado");
        done();
    });
});

function buscarTiposAcai(callback) {
    itemController.buscarTiposAcai().then(itens => {
        callback(typeof itens[0]);
    });    
}

QUnit.test('Buscar todos os tipos de acai', assert => {
    const done = assert.async();

    buscarTiposAcai(res => {
        assert.equal(res, typeof {}, "Resultado");
        done();
    });
});
