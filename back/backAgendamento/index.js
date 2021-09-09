const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cadastroLugar = require('./services/CadastroLugar');

app.use(express.urlencoded({extended: true}));
app.use(express.json());


require('./controllers/index')(app);


mongoose.connect("mongodb://localhost:27017/cadastro", {useNewUrlParser: true, useUnifiedTopology: true});


//Rota da criação dos lugares disponíveis
app.post('/cadastroPostoDeTrabalho', async (req, res) => {
    var status = await cadastroLugar.Create(
        req.body.unidade,
        req.body.sala,
        req.body.numero,
        req.body.disponivel,
    )

    if(status){
        res.send("Criado com sucesso!");
    }else{
        console.log(status);
        res.send("Ocorreu uma falha");
    }
});

//Rota para exibir lugares disponíveis
app.get('/agendamento', async (req, res) => {
    var lugares = await cadastroLugar.GetAll(false);
    res.json(lugares);
});

//Rota para selecionar o lugar (deixar ocupado)
app.put('/agendamento/:id', (req, res) => {

});

//Rota para realizar o agendamento
app.post('', async (req, res) => {

});

app.listen(3000, () => {});