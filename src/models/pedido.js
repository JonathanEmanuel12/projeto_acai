const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Pedido = sequelize.define("Pedido", {
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mesa: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

async function criarPedido() {
    await sequelize.sync();
}

criarPedido();

module.exports = Pedido;    