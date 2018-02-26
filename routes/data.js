var express = require('express');
var router = express.Router();

var Admin = require('../controller/admin/admin.js') 

// 获取产品列表
router.get('/product', Admin.productList);

// 文件上传
router.all('/upload',Admin.uploadConfig(), Admin.uploadFile);
// 表单添加
router.post('/addproduct', Admin.addproduct);
// 产品删除
router.post('/delproduct', Admin.delproduct);

module.exports = router;
