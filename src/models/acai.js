const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Acai = sequelize.define("Acai", {
    observacoes: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

async function criarAcai() {
    await sequelize.sync();
}

criarAcai();

module.exports = Acai;