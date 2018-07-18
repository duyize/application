var express = require('express');
var router = express.Router();
const getallusers = require('../model/getalluser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.send({ msg: 'aaa' });
});
router.get('/getalluser',getallusers);


module.exports = router;
