var express = require('express');
var router = express.Router();
const timers = require("../models/timer")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;

router.post('/submit-date',async function(req,res,next){
  await timers.insertOne({ftime:req.body.fmin,rtime:req.body.rmin,nsession:req.body.session});
  timerdate=await timers.findOne();
  res.render('/',{timer:timerdate})
})

