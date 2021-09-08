const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/backAgendamento');

mongoose.Promise = global.Promise;

module.exports = mongoose;