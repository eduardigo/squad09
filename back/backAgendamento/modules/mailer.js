const nodemailer = require('nodemailer');

//Dados para o envio do e-mail
const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
            host,
            port,
            auth: { user, pass },
});


module.exports = transport;

