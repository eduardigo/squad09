const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unidade = new Schema({
    unidade: {
        type: String,
        required: [true, 'Unidade é obrigatório'],
    },
});


module.exports = mongoose.model('Unidade', unidade);