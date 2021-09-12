const express = require('express');
const router = express.Router();
const Unidade = require('../models/unidade');
const Posto = require('../models/posto');

//Rota de criação da unidade de trabalho
router.post('/', async (req, res) => {
    try {
        const unidade = await new Unidade(req.body).save(); //cria a unidade e salva
        res.json({ unidade });
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota para listar as unidades
router.get('/', async (req, res) => {
    try {
        const unidade = await Unidade.find();

        res.json({ unidade });
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota para listar os lugares disponíveis por unidade
router.get('/posto/:unidadeId', async (req, res) => {
    try {
        const { unidadeId } = req.params;
        const posto = await Posto.find({
            unidadeId,
            status: 'D'
        }).select('_id mesa cadeira');

        // Retornar neste formato: [{ mesa: 'mesa', cadeira: 'cadeira', value: '_id'}]
        res.json({
            posto: posto.map(s => ({ mesa: s.mesa, cadeira: s.cadeira, value: s._id })),
        });

    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});



module.exports = router;