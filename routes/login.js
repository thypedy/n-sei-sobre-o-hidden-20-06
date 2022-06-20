module.exports = (app) => {
    //abrir o arquivo login,ejs
    app.get('/login', (req, res) => {
        res.render('login.ejs')
    })

    //validar o usuario 
    app.post('/login', async (req, res) => {
        //recuperar as infomações digitadas no formulario
        var dados = req.body

        //conectar com o banco de dados
        var database = require('../config/database')()

        //selecionar a model usuarios
        var usuarios = require('../models/usuario')

        //verificar se o email esta cadastrado
        var verificar = await usuarios.findOne({ email: dados.email })

        if (!verificar) {
            return res.send("email não cadastrado")
        }
        var cript = require('bcryptjs')
        var comparar = await cript.compare(dados.senha, verificar.senha)

        if (!comparar) {
            return res.send("senha errda parca")
        }

        //redirecionar para a tora atividads(precisa enviar o id)
        res.redirect('/atividades?id='+verificar._id)
    })
}   