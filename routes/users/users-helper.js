const db = require('../../database/dbConfig.js')

function getUsers() {
    return db('users')
}

function getUserById(id) {
    return db('projects')
        .where({id})
}

function addUser(body){
    return db
        .insert({body})
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
        .update({body})
        .then(res => {
            const id = res[0]
            return db('users')
        })
}

module.exports = {
    getUserById,
    getUsers,
    addUser,
    delUser,
}