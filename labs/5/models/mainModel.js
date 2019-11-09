const list = []

const add = (item) => list.push(item)
const get = () => list

module.exports = {
    get,
    add
}