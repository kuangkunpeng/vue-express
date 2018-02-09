// nongodb获取id的方法
var ObjectId = require('mongodb').ObjectID;

//数据库
var db = require('../../db/index.js')

// 文件上传插件
var multer  = require('multer');

// 加密模块
var crypto = require('crypto');
// 路径
var path = require("path")

module.exports = {
	// 上传文件配置
	uploadConfig:function(){
		var root = path.join(__dirname,'../../public/data');

		var storage = multer.diskStorage({
			destination: function (req, file, cb) {
				cb(null, root);
			},
			filename: function (req, file, cb) {
				var name = file.originalname.split('.');
				var md5 = crypto.createHash('md5');   
				var filename= md5.update(name[0]).digest('hex');
				cb(null, filename+'.png');  
			}
		});
		var upload = multer({storage: storage });
		return upload.single('file');	
	},
	// 文件上传
	uploadFile:function(req, res, next){
		var filePath=req.file;
		filePath.path=filePath.path.replace(process.cwd()+'\\public','');
	 	res.send(filePath);
	},
	// 获取产品列表
	productList:function(req, res, next) {
		var id;
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
	}
}