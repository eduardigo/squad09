const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cadastroLugar = require('./services/CadastroLugar');
const cadastroAgendamento = require('./services/CadastroAgendamento');
const login = require('./middlewares/auth');
const agendamento = require('./models/Agendamento');
const cors = require('cors');

app.use(cors({origin: "*",}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


require('./controllers/index')(app);


mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true, useUnifiedTopology: true});
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



//Essas rotas abaixo ainda não funcionam completamente, estou com algumas dificuldades, mas essas seriam as bases de cada uma e
//as funções a serem utilizadas, então a partir disso acho que conseguimos faze os ajustes necessários para elas funcionarem


//Rota para listar agendamentos
  app.get('/agendamento', async (req, res) => {
    try {
        const listar = await agendamento.find({});

        return res.send({ listar });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar agendamentos' });
    }
});

//Rota para buscar agendamento pelo id
app.get('/agendamento/:id', async (req, res) => {
    try {
        const agendamentoId = await agendamento.findById(req.params.id);

        return res.send({ agendamentoId });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar agendamento' });
    }
});

//Rota para buscar agendamento pelo id e deletar
app.delete('/agendamento/:id', async (req, res) => {
    try {
        const agendamentoId = await agendamento.findByIdAndDelete(req.params.id);

        return res.send({ agendamentoId });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir agendamento' });
    }
});

//Rota para atualizar agendamento(reagendar)
app.put('/agendamento/:id', async (req, res) => {
    try {
        const agendamentoId = await agendamento.findByIdAndUpdate(req.params.id);

        return res.send({ agendamentoId });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar agendamento' });
    }
});


app.listen(3000, () => {});

//Após os testes é só inserir "login" nos parâmetros para tornar a autenticação obrigatória nas rotas que quisermos