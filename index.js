const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT||5000;
const app = express();
const{client}=require('./connection/db')

app.options('*', cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
client.connect()
app.get('/',(req, res, next) =>{
	client.query('SELECT * from users', (err, result) => {
		if(!err){
			console.log(JSON.stringify(result))
			res.send({"message":"hello world!","data":result.rows})
		}
		
		//client.end()
	  })
	
	})


app.get('/api/v1',(req, res, next) =>{
res.send({"message":"hello world!"})
})
app.listen(PORT, () => {
	console.log("Server up and running on port: %d", PORT);
});