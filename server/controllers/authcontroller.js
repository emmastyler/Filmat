const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')



const login = async(req, res) => {

    const newPassword = req.body.password
    const email = req.body.email
   
    try {
       const user = await User.findOne({email: email})

        const verifyPassword = await bcrypt.compare(newPassword, user.password).then(function(result) {
        return result == true
    });

    if(verifyPassword){

        return res.status(200).json(user)
        
    }
    else{
        
        res.status(403).json({
            message:'Wrong Credentials'
        })
        
    } 
            
    
   } catch (error) {
    res.status(403).json({
        message:'Wrong Credentials'
    })
    
   }
    
   
}

const register = async (req, res) => {

    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);

    const user = {
        username:req.body.username,
        email:req.body.email
    }

    const generateToken = jwt.sign(user, 'shh')

    try {

        //check if username or email is taken
        const username = req.body.username
        const email = req.body.email

        const getUsername = await User.findOne({username: username, email: email})
        
      if(!getUsername){
          
          //for creating user  
          const createUser = new User({
              name: req.body.username,
              email: req.body.email,
              password: hash,
              token:generateToken
              
          })
          const createdUser = await createUser.save() 
          return res.json(createdUser)

      }
      else{
          res.status(403).json({
              message:'Username or Email already exists'
          })
         
      }
        
    } catch (error) {
        console.log(error)
    }
    
    
}






module.exports = {login, register}