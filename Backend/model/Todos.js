const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    title : String,
    desc: String
})

const Todos = mongoose.model('Todos', TodosSchema);

module.exports  = Todos;
