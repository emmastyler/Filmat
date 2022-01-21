const express = require('express')
const app = express()
const router = require('./routes/auth')
const movierouter = require('./routes/movie')
const listrouter = require('./routes/list')


const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config();


app.use(express.json())

app.use(router)
app.use(movierouter)
app.use(listrouter)




  mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log('connected'))
    .catch(error => console.log(error))
       





app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not found</h1>')
   
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Backend is running on port ${process.env.PORT || 5000} ...`)
})