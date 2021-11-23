const acaiModel = require("../models/acai");

const acaiController = {
    salvarAcai: async (body) => {
        try{
            await acaiModel.create({ 
                observacao: body.observacao
            });
            return {mensagem: "Item salvo com sucesso"}
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
    },
    buscarTodosAcai: async () => {
        try {
            return await acaiModel.findAll({
                raw: true
            });
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"}
        }
    }
}