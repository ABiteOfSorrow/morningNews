var express = require("express");
var router = express.Router();
var userModel = require("../models/users.js");

router.post("/sign-in", async function (req, res, next) {
  var error = [];
  var result = false;
  var alreadyExist = null;

  if (req.body.emailFromFrontSignIn == "" || req.body.passwordFromFrontSignIn == "") {
    error.push("champs vides");
  }

  if (error.length == 0) {
    alreadyExist = await userModel.findOne({
      email: req.body.emailFromFrontSignIn,
      password: req.body.passwordFromFrontSignIn,
    });
  }

  if (alreadyExist) {
    result = true;
  } else {
    error.push("email ou mot de passe incorrect");
  }

  res.json({ result, alreadyExist, error });
});

router.post("/sign-up", async function (req, res, next) {
  var error = [];
  var result = false;
  var userSaved = null;

  let alreadyExist = await userModel.findOne({
    email: req.body.emailFromFront,
  });

  if (alreadyExist != null) {
    error.push("utilisateur déjà présent");
  }

  if (req.body.usernameFromFront == "" || req.body.emailFromFront == "" || req.body.passwordFromFront == "") {
    error.push("champs vides");
  }

  if (error.length == 0) {
    var newUser = new userModel({
      name: req.body.usernameFromFront,
      email: req.body.emailFromFront,
      password: req.body.passwordFromFront,
    });

    userSaved = await newUser.save();
    console.log("Data imput to BD Success!");

    if (userSaved) {
      result = true;
    }
  }
  res.json({ result, userSaved, error });
});

module.exports = router;
router.get("/wishlist-movie", async function (req, res, next) {
  wishList = await movieModel.find();
  console.log(wishList);
  res.json({ wishList });
});
