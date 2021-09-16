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


app.listen(3000, () => {});
