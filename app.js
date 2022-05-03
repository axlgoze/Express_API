//usando objeto
const express = require('express')
//app de Express
const app = express()
app.use(express.json()) //indicamos que usaremos JSON
//Puerto en el que vamos a ver nuestra app: 3000
const port = 3000

// HTTP METHODS

//end point
app.get('/v1/explorers', (req,res) =>{
	console.log(`Api Explorers GET ALL requests ${new Date()}`)
	const explorer1 = {id: 1, name: "Axel1"}
	const explorer2 = {id: 2, name: "Axel2"}
	const explorer3 = {id: 3, name: "Axel3"}
	const explorer4 = {id: 4, name: "Axel4"}
	const explorer5 = {id: 5, name: "Axel5"}
	const explorers = [explorer1,explorer2,explorer3,explorer4,explorer5]
	res.status(200).json(explorers)
})

//get mediando ID
app.get('/v1/explorers/:id', (req,res) =>{
	console.log(`Api Explorers GET request ${new Date()}`)
	console.log(`Getting explorer with id ${req.params.id}`)
	const explorer = {id:1,name:"Axel"}
	res.status(200).json(explorer)
})

//post
app.post('/v1/explorers/:id', (req,res) =>{
	console.log(`Api Explorers POST request ${new Date()}`)
	const requestBody = req.body //Parámetros de un cliente
	res.status(201).json({message: "Created"})
})

//PUT
app.put('/v1/explorers/:id', (req,res) =>{
	console.log(`Api Explorers PUT request ${new Date()}`)
	console.log(`upadte explorer with id ${req.params.id}`)
	const requestBody = req.body //Parámetros de un cliente
	res.status(200).json({message: "Updated!"})
})




//inicializando app
app.listen(port, ()=>{
	console.log(`Example app listening on port ${port}`)
})
