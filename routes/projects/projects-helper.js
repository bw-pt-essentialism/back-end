const db = require('../../database/dbConfig.js')

function getProjectList(id) {
    return db.select(
        'users.username',
        'projects.*'
    )
    .from('users')
    .join('projects', 'projects.user_id', 'users.id')
    .where({user_id: id})
}

function addProject(body) {
    return db
    .insert(body)
    .into('projects')
    .then(res => {
        return db('projects')
            .where({id: res[0]})
            .first()
    })
}

function updProject(id, body) {
    return db('projects')
        .where({id})
        .update(body)
        .then(res => {
            return db('projects')
                .where({id})
                .first()
        })
}

async function delProject(id) {
    await db('projects')
        .where({id})
        .del()
}

module.exports = {
    getProjectList,
    addProject,
    updProject,
    delProject
}