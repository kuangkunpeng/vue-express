var express = require('express');
var router = express.Router();

var Admin = require('../controller/admin/admin.js') 

router.get('/product', Admin.productList);

router.get('/test',function(req,res){
	console.log('a');
})

router.all('/upload',Admin.uploadConfig(), Admin.uploadFile);

module.exports = router;
