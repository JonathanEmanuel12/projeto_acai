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
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
        
    },
    somatorioPreco: (itens) => {
        return itens.reduce((acum, item) => {
            acum = acum + item.preco;
            return acum;
        }, 0);
    },
    buscarTodosItens: async () => {
        let itens;
        try {
            itens = await itemModel.findAll({ raw: true });
            return itens;
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
        
    },
    buscarTiposAcai: async () => {
        try{
            return await itemModel.findAll({
                raw: true,
                attributes: ['titulo'],
                distinct: true,
                where: {
                    titulo: { [Op.like]: "Açai %" }
                }
            })
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
        
    },
    buscarTamanhosAcai: async () => {
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
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
        
    }



}

module.exports = itemController;