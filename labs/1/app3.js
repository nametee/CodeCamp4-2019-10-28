const express = require('express')
const app = express()

app.get('/bye',function(req,res){
    res.send('Good bye [get]')
})
app.post('/bye',function(req,res){
    res.send('Good bye [post]')
})
app.put('/bye',function(req,res){
    res.send('Good bye [put]')
})
app.delete('/bye',function(req,res){
    res.send('Good bye [delete]')
})
app.listen(5555)