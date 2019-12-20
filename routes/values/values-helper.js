const db = require('../../database/dbConfig.js')

function getVals() {
    return db('values')
}

function getValById(id) {
    return db('values')
        .where({id})
}

function addVal(body){
    return db
        .insert({body})
        .into('values')
        .then(res => {
            const id = res[0]
            return db('values')
                .where({id})
        })
}

function updVal(id, body) {
    return db('values')
        .where({id})
        .update({body})
        .then(res => {
            const id = res[0]
            return db('values')
                .where({id})
        })
}

function delVal(id) {
    db('values')
        .where({id})
        .del()
        .then(res => {
            return db('values')
        })
}

module.exports = {
    getValById,
    getVals,
    addVal,
    updVal,
    delVal,
}