const  db = require('mongoskin').db('mongodb://localhost:27017/vue');
module.exports={
	// 查询
	select:function(table,data,sucess){
		db.collection(table).find(data).toArray(function(err, result) {
			if (err) throw err;
			sucess(result);
		});
	}
}