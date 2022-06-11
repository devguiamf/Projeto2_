const { Model, DataTypes } = require('sequelize');

class Corretor extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            telefone: DataTypes.STRING,
            crea: DataTypes.STRING,
        }, { sequelize, tableName:"corretor"});
       

    }
}

module.exports = Corretor;

