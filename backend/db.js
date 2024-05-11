const mongoose = require('mongoose')

// Mongo connection
mongoose.connect("mongodb://localhost:27017/supertodo")

// todo Schema
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todoSchema
}