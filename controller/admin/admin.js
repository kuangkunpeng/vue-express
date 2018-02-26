// nongodb获取id的方法
var ObjectId = require('mongodb').ObjectID;

//数据库
var db = require('../../mongodb/index.js')

// 文件上传插件
var multer  = require('multer');

// 加密模块
var crypto = require('crypto');
// 路径
var path = require("path")

var productModel = require('../../models/product.js')

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
		id=req.query._id;
		if(id){
			productModel.find({_id:ObjectId(id)},function(error,data){
				res.send(data);
			});
		}else{
			productModel.find(function(error,data){
				res.send(data);
			});
		}
		
	},
	// 表单内容添加
	addproduct:function(req, res, next) {
		productModel.create(req.body.params,function(){
			res.send('a');
	
		});
	},
	// 产品删除
	delproduct:function(req, res, next) {
		productModel.remove({_id:req.body.params.id},function(){
			res.send('ok');
	
		});
	},
}