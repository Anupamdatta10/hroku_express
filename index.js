const express = require('express');
const cors = require('cors');
const PORT = 5000;
const app = express();


app.options('*', cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

app.get('/',(req, res, next) =>{
	res.send({"message":"hello world!"})
	})


app.get('/api/v1',(req, res, next) =>{
res.send({"message":"hello world!"})
})
app.listen(PORT, () => {
	console.log("Server up and running on port: %d", PORT);
});