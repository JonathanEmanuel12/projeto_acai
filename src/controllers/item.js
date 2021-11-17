const itemModel = require("../models/item");
const { Op } = require("sequelize");


const itemController = {

    salvarItem: async (body) => {
        try{
            await itemModel.create({ 
                titulo: body.titulo,
                preco: body.preco,
                tamanho: body.tamanho,
                descricao: body.descricao
            });

            return {mensagem: "Item salvo com sucesso"}
        }
        catch(error) {
            console.log(error.message);
        }
        return {mensagem: "Falha no servidor, favor tentar mais tarde"};
    },
    somatorioPreco: (itens) => {
        itens.reduce((acum, item) => {
            acum += item.preco;
        }, 0);
    },
    buscarTodosItens: async () => {
        let itens;
        try {
            itens = await itemModel.findAll();
            return itens;
        }
        catch(error) {
            console.log(error.message);
        }
        return {mensagem: "Falha no servidor, favor tentar mais tarde"};
    },
    buscarTiposAcai: async () => {
        try{
            return await itemModel.findAll({
                attributes: ['titulo'],
                distinct: true,
                where: {
                    titulo: { [Op.like]: "Açai %" }
                }
            })
        }
        catch(error) {
            console.log(error.message);
        }
        return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        
    },
    buscarTamanhosAcai: async () => {
        //pegar tamanhos distinct
        try {
            return await itemModel.findAll({
                attributes: ['tamanho'],
                distinct: true,
                where: {
                    tamanho : { [Op.not]: "" }
                }
            });
        }
        catch(error) {
            console.log(error.message);
        }
        return {mensagem: "Falha no servidor, favor tentar mais tarde"};
    }



}

module.exports = itemController;