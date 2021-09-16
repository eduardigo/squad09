const express = require('express');
const router = express.Router();
const Unidade = require('../models/unidade');
const Posto = require('../models/posto');
const Agendamento = require('../models/agendamento');

//Rota para criar um agendamento
router.post('/', async (req, res) => {
    try {
        //Verificar se já existe este agendamento
        const { unidadeId, postoId, data } = req.body;
        const existeAgendamento = await Agendamento.findOne({
            unidadeId,
            postoId,
            data,
        });
        if (existeAgendamento) {
            res.json({ message: 'Agendamento já existe!' })
        } else {
        const agendamento = await new Agendamento(req.body).save();
        res.json({ agendamento });
        }
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota para listar todos os agendamentos de uma data
router.get('/dia-exato/:data', async (req, res) => {
    try {
        const { data } = req.params;
        const listarAgendamentos = await Agendamento.find({
            data,
        }).select('_id usuarioId unidadeId postoId data');
        console.log(listarAgendamentos);

        res.json({
            listarAgendamentos: listarAgendamentos.map(s => ({ usuario: s.usuarioId, unidade: s.unidadeId, posto: s.postoId, data: s.data, value: s._id })),
        });

    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//Rota para listar todos os agendamentos
router.get('/', async (req, res) => {
    try {
        const listarAgendamentos = await Agendamento.find().select('_id usuarioId unidadeId postoId data');
        console.log(listarAgendamentos);

        res.json({
            listarAgendamentos: listarAgendamentos.map(s => ({ usuario: s.usuarioId, unidade: s.unidadeId, posto: s.postoId, data: s.data, value: s._id })),
        });

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
        console.log(listarAgendamentos);

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

/* teste buscar postos disponiveis por data e unidade
  router.get('/:unidadeId', async (req, res) => {
    try {
        const { unidadeId } = req.params;
        const { data } = req.body;
        let postosOcupados = await Agendamento.find({
            unidadeId,
            data,
        }).select('postoId');

        console.log(postosOcupados);
               

        const postosDisponiveis = await Posto.find({
                status: 'D',            
            }).select('postoId');

        console.log(postosDisponiveis);

        //Como fazer postosDisponiveis - postosOcupados?
        

    } catch (err) {
        res.json({ error: true, message: err.message});
    }
}) */