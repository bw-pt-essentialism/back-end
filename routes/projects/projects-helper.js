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
            .where({res})
    })
}

module.exports = {
    getProjectList,
    addProject
}