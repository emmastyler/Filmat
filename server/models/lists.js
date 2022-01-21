const mongoose = require('mongoose')
const schema = mongoose.Schema


const ListSchema = schema({
    name:{type: String},
    movies:[String]
}, {timestamps : true})

module.exports = mongoose.model('List', ListSchema)