const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const signUpModel = mongoose.models.users_tbs || mongoose.model("user_tbs", userSchema)

// create operation
app.post("/signup", async(req, res)=>{
    try {
        const result = await signUpModel.create({username, email, password})
        console.log(result);
        res.redirect("/signup")
    } catch (error) {
        console.log(error);
    }
})

// Read Operation
app.get("/signup", async(req, res)=>{
    try {
        const signup = await signUpModel.find()
        console.log(signup);
        res.render("index", {signup: signup})
    } catch (error) {
        console.log(error);
    }
})


const port = '8080'
const uri = "mongodb+srv://Techsation:Playmanjamb78@cluster0.atmrqxr.mongodb.net/nodeSignUp?retryWrites=true&w=majority"
const connect = async ()=>{
  mongoose.set("strictQuery", false)
  await mongoose.connect(uri).then(()=>{
    console.log("Mongoose don connect to MongoDB");
  }).catch((error)=>{
    console.log(error);
  })
}

connect()

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});