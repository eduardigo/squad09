var agendamento = require('../models/agendamento');
var mongoose = require('mongoose');
const postoDeTrabalho = require('../models/posto');

const agendar = mongoose.model('Agendamento', agendamento);

//Criação de um novo agendamento
class CadastroAgendamento {
    async Create (nome, email, unidade, data, lugar) {
        var newAgendamento = new agendar({
            nome: nome,
            email: email,
            unidade: unidade,
            data: data,
            lugar: lugar,
        });

        try{
            await newAgendamento.save();
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }
}



module.exports = new CadastroAgendamento();