const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postoDeTrabalho = new Schema({
    unidadeId: {
        type: mongoose.Types.ObjectId,
        ref: 'unidade',
        required: true,
    },
    mesa: {
        type: Number,
        required: true,
    },
    cadeira: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['D', 'B', 'O'],
        default: 'D',
    }
});


module.exports = mongoose.model('PostoDeTrabalho', postoDeTrabalho);