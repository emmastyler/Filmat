const express = require('express')
const listrouter = express.Router()
const {createList,deleteListById,getList,getListById,updateListById} = require('../controllers/listController')

const { verifyToken } = require('../middleware/verify')



listrouter.get('/list', getList)
listrouter.get('/list/:id', getListById)
listrouter.post('/list/create', createList)
listrouter.put('/list/update/:id', updateListById)
listrouter.delete('/list/delete/:id', deleteListById)




module.exports = listrouter