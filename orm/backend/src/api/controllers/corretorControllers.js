const req = require('express/lib/request');
const Corretor = require('../models/corretorModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const corretor = await Corretor.findAll();
        return resposta.json(corretor);
    },

    async store(req, res) {
       const corretor = await Corretor.create(req.body);
       return res.json({corretor})       
//       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { nome } = req.body
        const { telefone } = req.body
        const { crea } = req.body
        console.log("Nova Descrição: " + cat_descricao + "Novo Telefone" + telefone + "Novo crea" + crea)

        await Corretor.update({
            nome, 
            telefone,
            crea
            
        }, {
            where: { id: codigo_id}
        })

        return res.json({message: "Registro atualizado com sucesso!"})
     },

     async delete(req, res) {
        const { codigo_id } = req.params
        await Corretor.destroy({
            where: {
                id: codigo_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'Corretor deletada!!!'
        })

     },

     async indexId(req, res) {
        const { codigo_id } = req.params

        const categoria = await Corretor.findByPk(codigo_id)

        return res.json(categoria)



     },
 
}


