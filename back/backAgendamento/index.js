const express = require('express');
const app = express();
const login = require('./middlewares/auth');
const cors = require('cors');
require('./database');

app.use(cors({origin: "*",}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


require('./controllers/index')(app);

//Rotas

app.use('/unidade', require('./routes/unidade.routes'));
app.use('/posto', require('./routes/posto.routes'));
app.use('/agendamento', require('./routes/agendamento.routes'));


//Essas rotas abaixo ainda não funcionam completamente, estou com algumas dificuldades, mas essas seriam as bases de cada uma e
//as funções a serem utilizadas, então a partir disso acho que conseguimos faze os ajustes necessários para elas funcionarem


//Rota para listar agendamentos
  /* app.get('/agendamento', async (req, res) => {
    try {
        const listar = await agendamento.find({});

        return res.send({ listar });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao listar agendamentos' });
    }
}); */

//Rota para buscar agendamento pelo id
/* app.get('/agendamento/:id', async (req, res) => {
    try {
        const agendamentoId = await agendamento.findById(req.params.id);

        return res.send({ agendamentoId });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar agendamento' });
    }
}); */

//Rota para buscar agendamento pelo id e deletar
/* app.delete('/agendamento/:id', async (req, res) => {
    try {
        const agendamentoId = await agendamento.findByIdAndDelete(req.params.id);

        return res.send({ agendamentoId });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao excluir agendamento' });
    }
}); */

//Rota para atualizar agendamento(reagendar)
/* app.put('/agendamento/:id', async (req, res) => {
    try {
        const agendamentoId = await agendamento.findByIdAndUpdate(req.params.id);

        return res.send({ agendamentoId });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao atualizar agendamento' });
    }
}); */


app.listen(3000, () => {});

//Após os testes é só inserir "login" nos parâmetros para tornar a autenticação obrigatória nas rotas que quisermos