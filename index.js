const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = "8080";

// GET route to render the edit form

app.get("/edit/:id", (req, res) => {
  const index = req.query.index;
  const signUp = signUp[index];
  console.log(signUp);
  res.render("edit", { index, signUp });
});

const signUpModel = mongoose.models.users_tbs || mongoose.model("user_tbs", userSchema)
