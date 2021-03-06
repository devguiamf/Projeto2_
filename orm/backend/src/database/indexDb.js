const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const categorias = require('../api/models/categoriasModels')
const departamentos = require('../api/models/departamentosModels')
const corretor = require('../api/models/corretorModels')
const imovel = require('../api/models/imovelModels')

const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

categorias.init(conexao)
departamentos.init(conexao)
corretor.init(conexao)
imovel.init(conexao)

module.exports = conexao;
