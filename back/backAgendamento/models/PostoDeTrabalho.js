const mongoose = require('mongoose');

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
        unique: true,
    },
    disponivel: Boolean,
});

module.exports = postoDeTrabalho;