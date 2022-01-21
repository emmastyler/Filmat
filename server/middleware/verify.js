const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
    const authHeaders = req.headers['authorization']
    const _token = authHeaders && authHeaders.split(' ')[1];

    if(_token == null)res.sendStatus(403)

    jwt.verify(_token, 'shh', (err, token) => {
            if(err){
                return res.status(403).json({
                    message:'Unauthorized'
                })
                
            }
                req.user = token 
                next()
            
        }) 
}

module.exports = {verifyToken}