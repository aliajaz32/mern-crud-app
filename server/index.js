const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// <!--added from node js 3>
const db = require('./config/db');
const userModel = require('./models/Users')

db.connection.once('open',()=>{
    console.log("db connected")
})
.on('error', (err)=>{
    console.log('err in connecting mongo db ',err)
}  )
// <!--added from node js 3>
const app = express();
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    userModel.find({})
    .then (users => res.json(users))
    .catch(err => res.json(err))
});




app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err=>res.json(err))
})
app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndUpdate(
        {_id:id},
        {name:req.body.name,
            email:req.body.email,
            age:req.body.age })
    .then (users => res.json(users))
    .catch (err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id })
    .then ( res => res.json(res))
    .catch(err=>res.json(err))
})


app.post("/createUser",(req,res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err ))
})

app.delete('/deleteUser/:id',(req,res)  =>{
    const id  = req.params.id ;
    UserModel.findByIdAndDelete({_id:id})
    .then(res  => res.json(res) )
    .catch(err => res.json (err) )
})





app.listen(3001,()=>{
    console.log("server is running")
})