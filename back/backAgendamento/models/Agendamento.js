const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
    usuarioId: {
        type: mongoose.Types.ObjectId,
        ref: 'usuario',
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


module.exports = mongoose.model('Agendamento', agendamento);