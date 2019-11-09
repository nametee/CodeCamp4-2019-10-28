const model = require('../models/mainModel')

const add = (req,res) => {
    model.add(req.body.data)
    get(req,res)
}
const get = (req,res) => res.send(model.get())

module.exports = {
    get,
    add
}