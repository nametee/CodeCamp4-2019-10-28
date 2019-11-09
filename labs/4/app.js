const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('./public/') )

// for get req body by json or urlencode
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

const userRoute = require('./route/userRoute') 
app.use('/user',userRoute,(req,res)=>{res.send('404 User Not Found')})

app.listen(3000)