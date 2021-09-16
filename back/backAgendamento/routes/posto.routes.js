const express = require('express');
const router = express.Router();
const Unidade = require('../models/unidade');
const Posto = require('../models/posto');

//Rota de criação do posto de trabalho
router.post('/', async (req, res) => {
    try {
        //Verificar se já existe este posto de trabalho cadastrado
        const { unidadeId, mesa, cadeira } = req.body;
        const existePosto = await Posto.findOne({
            unidadeId,
            mesa,
            cadeira,
        });
        if (existePosto) {
            res.json({ message: 'Posto de Trabalho já existe!' })
        } else {
        const posto = await new Posto(req.body).save();
        res.json({ posto });
        }
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota de atualização dos dados do posto
router.put('/:id', async (req, res) => {
    try {
        const posto = {
            unidade: req.body.unidade,
            mesa: req.body.mesa,
            cadeira: req.body.cadeira,
            status: req.body.status,
        };
        await Posto.findByIdAndUpdate(req.params.id, posto);
        res.json({ message: 'Atualizado'});
        
        
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota de atualização do status do posto
router.patch('/:id', async (req, res) => {
    try {
        const posto = {
            status: req.body.status,
        };

        await Posto.findByIdAndUpdate(req.params.id, posto);
        
        res.json({ message: 'Atualizado'});
        
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota para bloquear o posto de trabalho
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Posto.findByIdAndDelete(id);
        res.json({ message: 'Posto deletado'});    
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

module.exports = router;