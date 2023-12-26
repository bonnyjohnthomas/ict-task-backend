const express = require('express')

const cors = require('cors')

const server=express()

const logic=require('./services/logic')

server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log("In port 8000");
})



//register 

    server.post('/register', (req,res)=>{
    console.log("Inside register api");
    console.log(req.body);

    
    logic.register(req.body.id,req.body.pass,req.body.name).then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
})



//login-post

server.post('/login',(req,res)=>{
    console.log('Inside login api');
    console.log(req.body);
    logic.login(req.body.id,req.body.pass).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})



//get user

server.get('/getUser/:id',(req,res)=>{
    logic.getUser(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// add pics

server.post('/main/add/:id',(req,res)=>{
    console.log('Inside Add');
    console.log(req.body);
    logic.addPics(req.body.id,req.body.url).then((result)=>{
    res.status(result.statusCode).json(result)  
    })
})