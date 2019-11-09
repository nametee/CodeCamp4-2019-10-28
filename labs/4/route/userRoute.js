const express = require('express')
const router = express.Router()

/*
// get by query
router.get('/',function(req,res){
    res.send(req.query.id)
})
*/

// get by parameter
router.get('/:id',(req,res)=>{
    res.send(req.params.id)
})

// get more parameter
router.get('/add/:a/:b',(req,res)=>{
    // params is string 
    /*let a = req.params.a
    let b = req.params.b
    res.send(a+b)*/

    // for number convert to string before send
    let a = parseFloat(req.params.a) 
    let b = parseFloat(req.params.b)
    res.send(String(a+b))
})

router.post('/add',(req,res)=>{
    let a = parseFloat(req.body.a)
    let b = parseFloat(req.body.b)
    res.send(String(a+b))
})
 
module.exports = router