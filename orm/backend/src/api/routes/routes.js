const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/indexControllers.js')
const categoriasControllers = require('../controllers/categoriasControllers.js')
const departamentosControllers = require('../controllers/departamentosControllers.js')
const corretorControllers = require('../controllers/corretorControllers.js')
const imovelControllers = require('../controllers/imovelControllers.js')

// rota raiz
routes.get('/', controllers.indexRaiz)

// rotas de categorias
routes.get('/categorias', categoriasControllers.index)
routes.post('/categorias', categoriasControllers.store)
routes.put('/categorias/:codigo_id', categoriasControllers.update)
routes.delete('/categorias/:codigo_id', categoriasControllers.delete)
routes.get('/categorias/:codigo_id', categoriasControllers.indexId)


// rotas de departamentos
routes.get('/departamentos', departamentosControllers.index)
routes.post('/departamentos', departamentosControllers.store)
routes.put('/departamentos/:codigo_id', departamentosControllers.update)

// rotas de imoveis
routes.get('/corretor', corretorControllers.index)
routes.post('/corretor', corretorControllers.store)
routes.put('/corretor/:codigo_id', corretorControllers.update)
routes.delete('/corretor/:codigo_id', corretorControllers.delete)
routes.get('/corretor/:codigo_id', corretorControllers.indexId)


// rotas de imovel
routes.get('/imovel', imovelControllers.index)
routes.post('/imovel', imovelControllers.store)
routes.put('/imovel/:codigo_id', imovelControllers.update)

module.exports = routes

