var express = require("express");
var router = new express.Router();

router.get("/", view);

function view(req, res, next){
  res.render("index");
}

module.exports = router;
