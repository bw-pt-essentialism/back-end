const db = require('../../database/dbConfig.js')

function getUsers() {
    return db('users')
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
            const id = res[0]
            return db('users')
                .where({id})
        })
}

function delUser(id) {
    db('users')
        .where({id})
        .del()
        .then(res => {
            return db('users')
        })
}

module.exports = {
    getUserById,
    getUsers,
    addUser,
    updUser,
    delUser,
}