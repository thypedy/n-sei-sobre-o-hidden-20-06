const mongoose = require('mongoose')

const conn = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb+srv://userAdmin:qweasdzxc1234@fiaptecnico.5oane.mongodb.net/crud')
    //conexao atlaas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:Wi1234@fiaptecnico.5oane.mongodb.net/todo_list')
}

module.exports = conn