let express = require('express')
let bodyParser = require('body-parser')
let mainRoute = require('./route/mainRoute')

let app = express()

app.use(express.static('./public/'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extented : true}))

app.use('/list',mainRoute)

app.listen(3000)