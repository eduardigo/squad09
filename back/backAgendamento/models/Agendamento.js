const mongoose = require('mongoose');

//Definição dos campos do banco de dados
const agendamento = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    unidadeId: {
        type: mongoose.Types.ObjectId,
        ref: 'unidade',
        required: true,
    },
    postoId: {
        type: mongoose.Types.ObjectId,
        ref: 'postoDeTrabalho',
        required: true,
    },
    data: {
        type: Date,
        required: true,
    }
});

module.exports = agendamento;