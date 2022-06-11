const { Model, DataTypes } = require('sequelize');

class Corretor extends Model {
    static init(sequelize) {
        super.init({
            tipo: DataTypes.STRING,
            cidade: DataTypes.STRING,
            area: DataTypes.DECIMAL(10,2),
            comodos: DataTypes.INTEGER,
            corretor: {
                type: DataTypes.INTEGER,
                references:{
                    model: 'Corretor',
                    key: 'id',
                }
            }
        }, { sequelize, tableName:"imovel"});
        
    }
}

module.exports = Corretor;

