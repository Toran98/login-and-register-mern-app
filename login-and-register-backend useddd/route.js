import express from "express";
import User from "./models/User";
const router = express.Router();

//API request create a new user

router.post("/user", async (req, res) => {
   try{
    if(!req.body.name || !req.body.email) {
      res.status(400);
      res.send({ message: "Name and Email is required!"})
   }
     else {

     const userExist = await User.findOne({
      name: req.body.name,
      email: req.body.email,
     })

    if (userExist == null){

     const user = new User({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
    });

    await user.save();
    res.send(user);
   }else{
     res.status(400);
     res.send({ message: "User already exists" })
   }
  } 

   }catch(err ){
    console.log(err);
     
    res.status(500);
      res.send({ error: "Oops! Something went wrong!" });
   } 
  });

  //login
  router.post("/login", async (req, res) => {
    try{
     if(!req.body.email || !req.body.password) {
       res.status(400);
       res.send({ message: "Name and Email is required!"})
    }
      else {

        console.log(req.body.email);
        console.log(req.body.password);
 
      const userExist ="abc";
     if (userExist == null){
      res.status(400);
      res.send({ message: "User not exists" })
     }
    else{
      res.send({ message: "" })
    }
   } 
 
    }catch(err ){
     console.log(err);
      
     res.status(500);
       res.send({ error: "Oops! Something went wrong!" });
    } 
   });


   

  //API request get all users

  router.get("/user", async (req, res) => {
    try {
    const user = await User.find();
    res.send(user);
    }catch {
      res.status(500);
      res.send({ error: "Oops! Something went wrong!!!" });
    }
  });

  //API request to get a single user by email adress

  router.get("/user", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.query.email});
      res.send(user);
    } catch {
      res.status(404);
      res.send({ error: "User doesn't exist!" });
    }
  });
  


  export default router