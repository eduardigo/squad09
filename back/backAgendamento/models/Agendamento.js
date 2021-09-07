const mongoose = require('mongoose');

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