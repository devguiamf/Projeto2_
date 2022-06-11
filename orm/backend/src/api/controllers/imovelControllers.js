const req = require('express/lib/request');
const Imovel = require('../models/imovelModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const imovel = await Imovel.findAll();
        return resposta.json(imovel);
    },

    async store(req, res) {
       const imovel = await Imovel.create(req.body);
       return res.json({imovel})       
    //    return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { tipo } = req.body
        const { cidade } = req.body
        const { area } = req.body
        const { comodos } = req.body        
        console.log("Novo Tipo: " + tipo + "Nova Cidade" + cidade + "Nova Área" + area + "Novo Comodo" + comodo)
        await Imovel.update({
            tipo,
            cidade,
            area,
            comodos          
            
        }, {
            where: { id: codigo_id}
        })

        return res.json({message: "Registro atualizado com sucesso!"})
     },

     async delete(req, res) {
        const { codigo_id } = req.params
        await Imovel.destroy({
            where: {
                id: codigo_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'Imovel deletada!!!'
        })

     },

     async indexId(req, res) {
        const { codigo_id } = req.params

        const categoria = await Imovel.findByPk(codigo_id)

        return res.json(categoria)



     },
 
}


