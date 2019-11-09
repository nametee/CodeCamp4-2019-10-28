const express = require('express')
const app = express()

app.get('/user/first',function(req,res){
    res.send('first on user')
})
app.get('/user/second',function(req,res){
    res.send('second on user')
}) 

app.listen(3000)