var express = require('express');
var router = express.Router();
// nongodb获取id的方法
var ObjectId = require('mongodb').ObjectID;

var db = require('../db')

// 文件上传插件
var multer  = require('multer');
// var upload = multer({ dest: 'uploads/' });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
  	var name = file.originalname.split('.');
  	var md5 = crypto.createHash('md5');   
  	var filename= md5.update(name[0]).digest('hex');
    cb(null, filename+'.png');  
  }
})
 
var upload = multer({storage: storage })
// 加密模块
var crypto = require('crypto');


router.get('/product', function(req, res, next) {
	let id;
	console.log(req.query._id)
	if(req.query._id){
		id=req.query._id;
		db.select('product',{_id:ObjectId(id)},function(r){
			res.send(r);
		});
	}else{
		db.select('product',{},function(r){
			res.send(r);
		});

	}
});

router.all('/upload',upload.single('file'), function (req, res, next) {
	var filePath=req.file;
	console.log(filePath)
 	res.send(filePath);
});

module.exports = router;
