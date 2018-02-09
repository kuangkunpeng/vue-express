// const  db = require('mongoskin').db('mongodb://localhost:27017/vue');
// module.exports={
// 	// 查询
// 	select:function(table,data,sucess){
// 		db.collection(table).find(data).toArray(function(err, result) {
// 			if (err) throw err;
// 			sucess(result);
// 		});
// 	}
// }
// 


var  mongoose = require('mongoose');
var chalk = require('chalk');
var config = require('../config/config.js');

mongoose.connect(config.url);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.once('open' ,() => {
	console.log(
    chalk.green('连接数据库成功')
  );
})

db.on('error', function(error) {
    console.error(
      chalk.red('Error in MongoDb connection: ' + error)
    );
    mongoose.disconnect();
});

db.on('close', function() {
    console.log(
      chalk.red('数据库断开，重新连接数据库')
    );
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

module.expords = db;
