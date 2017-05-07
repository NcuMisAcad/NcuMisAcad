
	//載入MySQL模組
	var mysql = require('mysql');
	//建立連線
	var connection = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'toor',
	    database: 'nodejs'
	});

	//開始連接
	connection.connect();

	//接著就可以開始進行查詢
	connection.query('SELECT 1+1 AS solution',function(error, rows, fields){
	    //檢查是否有錯誤
	    if(error){
	        throw error;
	    }
	    console.log(rows[0].solution);
	    console.log(typeof(rows[0])); //2
	});


function inputHistory(data)
{
};

//console.log(query.sql); // INSERT INTO history SET `id` = 1, `title` = 'Hello MySQL'



exports.inputHistory = inputHistory;