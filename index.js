const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')({
	capSQL: true // if you want all generated SQL capitalized
 });
const PORT = process.env.PORT||5000;
const app = express();
require('dotenv').config()
const{client}=require('./connection/db')
app.use(express.json())
app.options('*', cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
client.connect()
app.get('/',(req, res, next) =>{
	client.query('SELECT * from users', (err, result) => {
		if(!err){
			
			res.send({"message":"hello world!","data":result.rows})
		}
		
		//client.end()
	  })
	
	})

app.post('/',(req, res, next) =>{
		let data=[];
		data.push(req.body);
		console.log("-------------------",data)
		let result=pgp.helpers.insert(req.body, null, 'users');
		console.log("result:",result)
		//res.send({"message":"hello world!","data":result.rows})
		client.query(result, (err, res) => {
			console.log("",err)
			if(!err){
				//console.log(JSON.stringify(res))
				res.send({"message":"hello world!","data":res})
			}
			
		// 	//client.end()
		  })
		
		})
	
	
app.get('/api/v1',(req, res, next) =>{
res.send({"message":"hello world!"})
})
app.listen(PORT, () => {
	console.log("Server up and running on port: %d", PORT);
});