const express = require('express')
const app = express()
const dogRoute = require('./route/dogRoute')
const catRoute = require('./route/catRoute')
app.use('/dog',dogRoute)
app.use('/cat',catRoute)

app.listen(3000)