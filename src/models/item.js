const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Item = sequelize.define("Item", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    tamanho: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.TEXT,
    }
});

async function criarItem() {
    await sequelize.sync();
}

criarItem();

module.exports = Item;