const express = require("express"); // serverside framework 
const userRouter = require('./route/user');
const propertyRouter = require('./route/property');
const app  = express();
const jwt=require("jsonwebtoken");
const config = require('./route/config');
const crypto = require('crypto-js')
app.use(express.json());
const categoryRouter= require('./route/category');
// app.use((req,res,next)=>{
//     next();
// })
const util = require('./Util');
app.use('/user',userRouter);
app.use('/property',propertyRouter);
app.use('/category',categoryRouter);


// middleware to verify token
app.use ((request ,response ,next)=>{
    // check if token is requied for the Api
if(
    request.url ==='/user/login'||
     request.url ==='/user/register'||
     request.url ==='/user/profile/:id'||     
     request.url.startsWith('/image/')     

){
    //skips verifying the token
    next()
}
else{
    // get the token
    const token= request.headers['token']

    if(!token|| token.length === 0){
        response.send(util.createErrorResult('missing token'))
    }
    else{
        try{
            // verify the token
            const payload =jwt.verify(token, config.secret)

            // add the user id
            request.userID=payload ['id']
            // todo : expiry logic
            // call the real route
            next()
        } catch(ex){
            response.send(util.createErrorResult('invalid token'))
        }

    }
}
})


app.listen(9999, ()=>{console.log("server started at port no 9999")})