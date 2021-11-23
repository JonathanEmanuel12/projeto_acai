const pedidoModel = require("../models/pedido");
const acaiModel = require("../models/acai");
// const ESTADOS = {
//     APAGAR: 1,
//     PAGO: 2,
//     PREPARANDO: 3,
//     FINALIZADO: 4
// }


const pedidoController = {
    salvarPedido: async (body) => {
        try {
            await pedidoModel.create({
                estado: body.estado,
                mesa:  body.mesa
            });
            return {mensagem: "Pedido salvo com sucesso"}
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
    },
    buscarTodosPedidos: async () => {
        try {
            return await pedidoModel.findAll({
                raw: true
            });
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
    },
    buscarTodosPedidosPorEstado: async (estado) => {
        try {
            return await pedidoModel.findAll({
                raw: true,
                where: {
                    estado: estado
                }
            });
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
    },
    buscarTodosPedidosPorMesa: async (mesa) => {
        try {
            return await pedidoModel.findAll({
                raw: true,
                where: {
                    mesa: mesa
                }
            });
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
    },
    buscarPedidoPorId: async (pedidoId) => {
        try {
            return await pedidoModel.findByPk({
                include: acaiModel
            })
        }
        catch(error) {
            console.log(error.message);
            return {mensagem: "Falha no servidor, favor tentar mais tarde"};
        }
    }

}