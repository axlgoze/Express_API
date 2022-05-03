//usando objeto
const express = require('express')
//app de Express
const app = express()
app.use(express.json()) //indicamos que usaremos JSON
//Puerto en el que vamos a ver nuestra app: 3000
const port = 3000

//inicializando app
app.listen(port, ()=>{
	console.log(`Example app listening on port ${port}`)
})
