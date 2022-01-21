const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String},
    password:{type: String},
    token:{type: String, default: null},
    isAdmin:{type: Boolean, default:false}
   
}, { timestamps: true }
)


module.exports = mongoose.model('User', userSchema);
