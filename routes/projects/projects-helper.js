const db = require('../../database/dbConfig.js')

function getProjectList(id) {
    return db.select(
        'users.username',
        'projects.name',
        'projects.description'
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
        const proj = res[0]
        return db('projects')
            .where({proj})
    })
}

module.exports = {
    getProjectList,
    addProject
}