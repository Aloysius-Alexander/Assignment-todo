const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
   
    
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Todo', todoSchema)