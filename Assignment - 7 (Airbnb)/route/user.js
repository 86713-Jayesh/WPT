const express = require("express"); 
const db = require("../db");
const util = require('../Util');



const router = express.Router();

router.post('/login',(req,res)=>{
    const {email,password} = req.body;
    const stmp = `select firstName, lastName,phoneNumber,isDeleted from user where email =? and password =?`; 
    const encryptedPassword =String(crypto.SHA256(password))
    db.pool.query(stmp,[email,encryptedPassword],(error,user)=>{
        if(error)
        {
            res.send(util.createErrorResult(error));
        }
        else{
                if(user.length==0)
                    {
            res.send(util.createErrorResult('user does not exist'))
                    }
            else{
                const user = user[0]
                if(user.isDeleted){
                res.send(util.createErrorResult('your account is closed'))
                }

            else{
            // create the payload
            const payload ={ id: user.id}
            const token = jwt.sign(payload,config.secret)
            const userData={
                token, 
                name: `${user['firstName']} ${user['lastname']}`,
            }
            res.send(utils.createSuccessResult(userData))
        }
    }
}      
    }
)});
router.post('/register',(req, res)=>{
const { firstName, lastName, email,password, phone} = req.body
const statement = `insert into user (firstName, lastName, email, password, phoneNumber) values (?, ?, ?, ?, ?);`
const encryptedPassword =String(crypto.SHA256(password))
db.pool.execute(
    statement,
    [firstName,lastName,email,encryptedPassword,phone],
    (error,result)=>{
        res.send(util.createResult(error,result))
    }
)
});


module.exports=router;