const express = require('express');
const router = express.Router();
const Unidade = require('../models/unidade');
const Posto = require('../models/posto');
const Agendamento = require('../models/agendamento');

//Rota para criar um agendamento. Precisamos ver como bloquear o agendamento para mesma data e posto de trabalho
router.post('/', async (req, res) => {
    try {
        const agendamento = await new Agendamento(req.body).save();
        res.json({ agendamento });
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota para listar os agendamentos de um usuário
router.get('/:usuarioId', async (req, res) => {
    try {
        const { usuarioId } = req.params;
        const listarAgendamentos = await Agendamento.find({
            usuarioId,
        }).select('_id unidadeId postoId data');

        res.json({
            listarAgendamentos: listarAgendamentos.map(s => ({ unidade: s.unidadeId, posto: s.postoId, data: s.data, value: s._id })),
        });

    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota para editar a unidade e o posto no agendamento. Ainda precisamos verificar como fica para alterar a data.
router.put('/:id', async (req, res) => {
    try {
        const agendamento = {
            unidadeId: req.body.unidadeId,
            postoId: req.body.postoId,
        };
        await Agendamento.findByIdAndUpdate(req.params.id, agendamento);
        
        res.json({ message: 'Atualizado'});

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//Rota para deletar o agendamento
router.delete('/:id', async (req, res) => {
    try {

        const agendamentoId = await Agendamento.findByIdAndDelete(req.params.id);

        res.json({ message: 'Agendamento deletado!' });

    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;