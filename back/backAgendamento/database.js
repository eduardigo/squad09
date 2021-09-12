const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cadastro", {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('DB is up!'))
        .catch(() => console.log(err));
mongoose.Promise = global.Promise;