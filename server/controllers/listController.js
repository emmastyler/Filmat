const List = require('../models/lists')



const getList = async(req, res) =>{
    
    try {
        const lists = await List.find({})
        if(lists){
            return res.status(200).json(lists)
        }
    } catch (error) {
        console.log(error)
    }
}

const getListById = async(req, res) =>{
    
    try {
        const lists = await List.findById(req.params.id)
        if(lists){
            return res.status(200).json(lists)
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteListById = async(req, res) =>{
    
    try {
        const lists = await List.deleteOne({name: req.query.name})
        if(lists){
            return res.status(200).json({
                message:'Movies deleted'
            })
        }
        console.log(req.query.name)
    } catch (error) {
        console.log(req.query)
    }
}

const updateListById = async(req, res) =>{
    
    try {
        const newList = {
            name:req.body.name,
            movies:req.body.movies
            
           }
    
        const lists = await List.findByIdAndUpdate(req.params.id, newList, {new: true})
        if(lists){
            return res.status(200).json(lists)
        }
        else {

        }
    } catch (error) {
        console.log(error)
    }
}

const createList = async(req, res) =>{
    

    try {
       const lists = new List({
        name:req.body.name,
        movies:req.body.movies
       })

      const list_name = await List.findOne({name: req.body.name})

      const nameList = list_name?.name
   
        if(!nameList){

            const createdList = await lists.save()
            return res.status(200).json(createdList)
        }
        else {
            res.status(400).json({
                message: 'List already exists, select form List page'
            })
        }
        } catch (error) {
            console.log(error)
        }
}

module.exports = {getList,getListById, deleteListById, updateListById, createList}

