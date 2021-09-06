const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');


const { host, port, user, pass } = require('../../config/mail.json');
//const { Router } = require('express');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  });

  transport.use(hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  }));

  module.exports = transport;