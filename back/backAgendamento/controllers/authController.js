const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const authConfig = require('../config/auth');
const User = require('../models/user');
const router = express.Router();

// Geração do token para autenticação
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

// Rota de registro
router.post('/registro', async (req, res) => {
    const { email } = req.body;

    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'Usuário já cadastrado' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ 
            user,
            token: generateToken({ id: user.id }),
        });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao realizar o cadastro' });
    }
});

// Rota de autenticação
router.post('/autenticacao', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'Usuário não encontrado' });

    // Comparar se a senha inserida é diferente da cadastrada no banco
    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha inválida' });


    user.password = undefined;


    res.send({ 
        user, 
        token: generateToken({ id: user.id }),
    });

});

// Rota para caso o usuário esqueça a senha
router.post('/esqueceu_senha', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user)
            return res.status(400).send({ error: 'Usuário não encontrado' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });
                

        transport.sendMail({
            from: "Squad09 <edubraga55@hotmail.com>",
            to: email,
            subject: "Siga os passos abaixo para redefinir sua senha",
            text: "TEXTO A SER ELABORADO",
            context: { token },
        }, (err) => {
            console.log(err);
            if (err)
                return res.status(400).send({ error: 'Não foi possível enviar o email' });

            return res.send();
        });
    } catch (err) {
        res.status(400).send({ error: 'Erro ao tentar recuperar senha, tente novamente' });
    }
});

// Rota de recuperação de senha
router.post('/recuperar_senha', async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne({ email })
        .select('+passwordResetToken passwordResetExpires');

        if (!user)
        return res.status(400).send({ error: 'User não encontrado' });

        if (token !== user.passwordResetToken)
            return res.status(400).send({ error: 'Token inválido' });

        const now = new Date();

        if (now > user.passwordResetExpires)
            return res.status(400).send({ error: 'Token expirado, gere um novo' });

        user.password = password;

        await user.save();

        res.send();

    } catch (err) {
        res.status(400).send({ error: 'Falha ao resetar senha, tente novamente' });
    }
});

module.exports = app => app.use('/auth', router);