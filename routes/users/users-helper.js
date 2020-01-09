const db = require('../../database/dbConfig.js')

function getUsers() {
    return db('users')
}

function getUserBy(key) {
    return db('users')
        .where(key)
        .first()
}

function getUserById(id) {
    return db('users')
        .where({id})
}

function addUser(body){
    return db
        .insert(body)
        .into('users')
        .then(res => {
            const id = res[0]
            return db('users')
                .where({id})
        })
}

function updUser(id, body) {
    return db('users')
        .where({id})
        .update(body)
        .then(res => {
            return db('users')
                .where({id})
        })
}

async function delUser(id) {
    await db('users')
        .where({id})
        .del()
        return db('users')
        
}

module.exports = {
    getUserById,
    getUserBy,
    getUsers,
    addUser,
    updUser,
    delUser,
}