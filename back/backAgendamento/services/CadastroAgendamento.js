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
           
            //Estou testando algumas coisas para inserir novo agendamento
            //const db = await mongoose.connect(agendamento);
            //await db.Collection("postoDeTrabalho").insertOne(newAgendamento, function(err,res){
                //if (err) throw err;
                //console.log("1 registro inserido");
                //db.close();
            //});

            await newAgendamento.save();
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }
}



module.exports = new CadastroAgendamento();