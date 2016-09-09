var express = require("express");
var router = new express.Router();

router.get("/", view);
router.get("/err", err);
router.post("/validate", validate);

function view(req, res, next){
  res.render("index");
}

function err(req, res, next){
  next(new Error("test error"));
}

function validate(req, res, next){
  res.json({
    valid: true
  });
}

module.exports = router;
