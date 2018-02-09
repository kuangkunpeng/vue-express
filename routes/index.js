var express = require('express');
var router = express.Router();
var db = require('../mongodb')
var userModel = require('../models/user.js')

/* GET home page. */

router.all('/login', function(req, res) {
	userModel.findOne({user:'admin'},function(err,person){
		if(person){
			res.send({status:"ok",data:person});
		}else{
			res.send({status:"err",data:err});
		}
	});
});

module.exports = router;
