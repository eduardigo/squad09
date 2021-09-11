const mongoose = require('mongoose');

//Definição dos campos do banco de dados
const postoDeTrabalho = new mongoose.Schema({
    unidade: {
        type: String,
        required: true,
    },
    sala: {
        type: String,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    disponivel: Boolean,
});

module.exports = postoDeTrabalho;