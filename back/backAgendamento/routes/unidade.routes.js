const express = require('express');
const router = express.Router();
const Unidade = require('../models/unidade');
const Posto = require('../models/posto');

//Rota de criação da unidade de trabalho
router.post('/', async (req, res) => {
    try {
        //Verificar se já existe esta unidade
        const { unidade } = req.body;
        const existeUnidade = await Unidade.findOne({
            unidade
        });
        if (existeUnidade) {
            res.json({ message: 'Unidade já existe!' })
        } else {
        const unidade = await new Unidade(req.body).save();
        res.json({ unidade });
        }
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
        }).select('_id mesa cadeira status');

        // Retornar neste formato: [{ mesa: 'mesa', cadeira: 'cadeira', value: '_id'}]
        res.json({
            posto: posto.map(s => ({ mesa: s.mesa, cadeira: s.cadeira, status: s.status, value: s._id })),
        });

    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});


router.get('/posto/:unidadeId/:mesa', async (req, res) => {
    try {
        const { mesa } = req.params;
        const { unidadeId } = req.params;
        const posto = await Posto.find({
            unidadeId,
            mesa,
            status: 'D'
        }).select('_id mesa cadeira status');

        // Retornar neste formato: [{ mesa: 'mesa', cadeira: 'cadeira', value: '_id'}]
        res.json({
            posto: posto.map(s => ({ mesa: s.mesa, cadeira: s.cadeira, status: s.status, value: s._id })),
        });

    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});


module.exports = router;