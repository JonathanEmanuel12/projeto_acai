const sequelize = require("db");
const { DataTypes } = require("sequelize");

const Acai = sequelize.define("Acai", {
    observacoes: DataTypes.STRING
})

async function criarAcai() {
    await sequelize.sync();
}

await criarAcai();

module.exports = Acai;