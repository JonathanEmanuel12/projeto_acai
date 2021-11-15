const sequelize = require("db");
const { DataTypes } = require("sequelize");

const Item = require("item");
const Acai = require("acai");
const Pedido = require("pedido");


const Acai_Item = sequelize.define("Acai_Item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

Acai.belongsToMany(Item, { through: Acai_Item });
Item.belongsToMany(Acai, { through: Acai_Item });

const Pedido_Acai = sequelize.define("Pedido_Acai", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

Pedido.belongsToMany(Acai, { through: Pedido_Acai});
Acai.belongsToMany(Pedido, { through: Pedido_Acai});


async function criarTabelasRelacoes() {
    await sequelize.sync();
}

await criarTabelasRelacoes();

module.exports = { Item, Acai, Pedido }