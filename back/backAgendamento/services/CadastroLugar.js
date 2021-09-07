var postoDeTrabalho = require('../models/PostoDeTrabalho');
var mongoose = require('mongoose');

const lugar = mongoose.model('PostoDeTrabalho', postoDeTrabalho);

//função para criar um novo lugar
class CadastroLugar {
    async Create(unidade, sala, numero, disponivel) {
        var newLugar = new lugar({
            unidade: unidade,
            sala: sala,
            numero: numero,
            disponivel: disponivel,
        });

        try{
            await newLugar.save();
            return true;
        }catch(err){
            console.log(err);
            return false;
        }
    }

    //função para exibir os lugares disponíveis
    async GetAll(showDisponivel){
        if(showDisponivel){
            return await lugar.find();
        }else{
            return await lugar.find({'disponivel': true});
        }
    }
}



module.exports = new CadastroLugar();