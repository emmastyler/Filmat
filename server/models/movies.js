const mongoose = require('mongoose')
const schema = mongoose.Schema


const moviesSchema = new schema({
    name:{type: String, unique: true},
    rating:{type: Number},
    description:{type: String},
    isSeries:{type: Boolean, default: false},
    year:{type: String},
    duration:{type: Number},
    isMovie:{type: Boolean, default: false},
    imgSrc:{type: String},
    videoSrc:{type: String}

}, { timestamps: true })


module.exports = mongoose.model('Movies', moviesSchema)