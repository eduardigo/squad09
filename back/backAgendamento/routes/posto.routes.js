const express = require('express');
const router = express.Router();
const Unidade = require('../models/unidade');
const Posto = require('../models/posto');

//Rota de criação do posto de trabalho
router.post('/', async (req, res) => {
    try {
        const posto = await new Posto(req.body).save();
        res.json({ posto });
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

//Rota para bloquear o posto de trabalho
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Posto.findByIdAndUpdate(id, { status: 'B'});
        res.json({ message: 'Bloqueado'});    
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

module.exports = router;