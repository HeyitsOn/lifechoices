import express from "express"
import bodyParser from "body-parser";
import { users } from "../model/index.js";
import { verifyToken } from "../middleware/AuthenticateUser.js";

const userRouter=express.Router()
//fetch users
userRouter.get('/',(req,res)=>{
    try{
        users.fetchUsers(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve users'
        })
    }
})
//fetch user
userRouter.get('/:id',(req,res)=>{
    try{
        users.fetchUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a user'
        })
    }
})
//add a user
userRouter.post('/register',bodyParser.json(),(req,res)=>{
    try{
        users.createUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to add new user'
        })
    }
})
userRouter.post('/update/:id', bodyParser.json(),(req, res)=>{
    try{
        users.updateUser(req, res)
    
    }catch(e){
        res.json({
            status:res.statusCode,
            msg: "Failed to update a user"
        })
    }
})
userRouter.delete('/delete/:id', bodyParser.json(),(req, res)=>{
    try{
        users.deleteUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to delete a user."
            })
    }
})

export{
    userRouter,express
}