const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cadastroLugar = require('./services/CadastroLugar');
const cadastroAgendamento = require('./services/CadastroAgendamento');
const login = require('./middlewares/auth');
const cors = require('cors');
app.use(cors({origin: "*",}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


require('./controllers/index')(app);


mongoose.connect("mongodb://localhost:27017/cadastro", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;


//Rota da criação dos lugares disponíveis
app.post('/cadastroPostoDeTrabalho', async (req, res) => {
    var status = await cadastroLugar.Create(
        req.body.unidade,
        req.body.sala,
        req.body.numero,
        req.body.disponivel,
    )

    if(status){
        res.json("Criado com sucesso!");
    }else{
        console.log(status);
        res.json("Ocorreu uma falha na criação");
    }
});

//Rota para exibir lugares disponíveis
app.get('/agendamento', async (req, res) => {
    var lugares = await cadastroLugar.GetAll(false);
    res.json(lugares);
});

//Rota para selecionar o lugar (deixar ocupado)
app.put('/agendamento/:id', async (req, res) => {
    var id = req.params;
    var ocupado = req.body;

    
});

//Rota do agendamento
app.post('/agendamento', async (req, res) =>{
    var agend = await cadastroAgendamento.Create(
        req.body.nome,
        req.body.email,
        req.body.unidade,
        req.body.data,
        req.body.lugar,
    )

    if(agend){
        res.json("Criado com sucesso!");
    }else{
        console.log(agend);
        res.json("Ocorreu uma falha na criação");
    }
});




app.listen(3000, () => {});

//Após os testes é só inserir "login" nos parâmetros para tornar a autenticação obrigatória nas rotas que quisermos