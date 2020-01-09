const express = require('express')

const Project = require('./projects-helper.js')

const router = express.Router()

router.get('/:id', (req, res) => {
    const id = req.params.id

    Project.getProjectList(id)
        .then(projects => {
            proj = projects[0]
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({message: 'Error retrieving projects', err})
        })
})

router.post('/', (req, res) => {
    const body = req.body

    Project.addProject(body)
        .then(proj => {
            res.status(201).json(proj)
        })
        .catch(err => {
            res.status(500).json({message: 'Error creating project', err})
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    Project.updProject(id, body)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(err => {
            res.status(500).json({message: 'Error updating the user', err})
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    Project.delProject(id)
        .then(deleted => {
            res.status(200).json({message: 'Project successfully deleted'})
        })
        .catch(err => {
            res.status(500).json({message: 'Error deleting the project', err})
        })
})

module.exports = router