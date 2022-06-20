module.exports = (app)=>{
    //abrir o arquivo registro,ejs
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    //gravar as infomações digitas no mongoAtlas
    app.post('/registro',async(req,res)=>{
        //recuperar as infomações deigitadas
        var dados = req.body

        //importar as configurações
        var database = require('../config/database')()

        //definir em qual coleção vamos gravar
        var usuarios = require('../models/usuario')

        //verificar se o email ja esta cadastrado
        var verificar = await usuarios.findOne({email:dados.email})
        if(verificar){
            return res.send("Email já cadastrado")
        }

        //cripitografar a senha
        var cript = require("bcryptjs")
        var senhasegura = await cript.hash(dados.senha,10) 


        //gravar o documento
        var documentos = await new usuarios ({
            nome:dados.nome,
            email:dados.email,
            senha:senhasegura
        }).save()
        res.redirect('/login')
    })
}