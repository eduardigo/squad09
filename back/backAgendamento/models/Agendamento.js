const mongoose = require('mongoose');

//Definição dos campos do banco de dados
const agendamento = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    unidade: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
    lugar: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref:"PostoDeTrabalho",
        type: Number,
        required: true,
    },
});

module.exports = agendamento;