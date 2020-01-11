const db = require('../../database/dbConfig.js')

function getVals() {
    return db('values')
}

function getValsBy(key) {
    return db('values')
        .where(key)
        .first()
}

function getValById(id) {
    return db('values')
        .where({id})
}

function addVal(body){
    return db
        .insert(body)
        .into('values')
        .then(res => {
            const id = res[0]
            return db('values')
                .where({id})
                .first()
        })
}

function updVal(id, body) {
    return db('values')
        .where({id})
        .update(body)
        .then(res => {
            return db('values')
                .where({id})
                .first()
        })
}

async function delVal(id) {
    await db('values')
        .where({id})
        .del()
        return db('values')
        
}

module.exports = {
    getValById,
    getValsBy,
    getVals,
    addVal,
    updVal,
    delVal,
}