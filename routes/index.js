var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/data', function(req, res) {
	res.send('hello');
});
router.all('/login', function(req, res) {
	// res.cookie('name', 'koby', { domain: 'http://127.0.0.1:8080'});
	db.select('user',{user:req.query.user},function(r){
		if(r.length){
			res.send({status:"ok",data:r});
			
		}else{
			res.send({status:"err"});
		}
		
	})
	
  });

module.exports = router;
