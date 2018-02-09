// nongodb获取id的方法
var ObjectId = require('mongodb').ObjectID;

var db = require('/db')

// 文件上传插件
var multer  = require('multer');

// 加密模块
var crypto = require('crypto');


class BaseCtrl(){
	constructor(){

	}
	// 文件上传
	uploadFile(){
		// var storage = multer.diskStorage({
		// 	destination: function (req, file, cb) {
		// 		cb(null, 'uploads/')
		// 	},
		// 	filename: function (req, file, cb) {
		// 		var name = file.originalname.split('.');
		// 		var md5 = crypto.createHash('md5');   
		// 		var filename= md5.update(name[0]).digest('hex');
		// 		cb(null, filename+'.png');  
		// 	}
		// });
		// var upload = multer({storage: storage });
		// return upload;
		alert('a')
	}
}
export default BaseCtrl;