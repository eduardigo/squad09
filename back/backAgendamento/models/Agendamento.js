const mongoose = require('mongoose');

//Definição dos campos do banco de dados
const agendamento = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    description: String,
    date: Date,
});

module.exports = agendamento;