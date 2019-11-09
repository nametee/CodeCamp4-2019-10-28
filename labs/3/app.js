const express = require('express')
const app = express()

app.use(express.static('./public/') )

/*app.use(express.static('./public/'),(req,res,next)=>{
    res.send('404 Not Found') 
}) */

const userRoute = require('./route/userRoute')
//app.use('/user',userRoute)
app.use('/user',userRoute,(req,res)=>{res.send('404 User Not Found')})

app.listen(3000)