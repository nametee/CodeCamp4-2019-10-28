const express = require('express')
const app = express()
const userRoute = require('./route/userRoute')
app.use('/user',userRoute)

app.listen(3000)