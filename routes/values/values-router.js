const express = require('express')

const Value = require('./values-helper.js')

const router = express.Router()

router.get('/', (req, res) => {
    Value.getVals()
        .then(vals => {
            res.status(200).json(
                vals.map(cv => {
                    return cv
                })
            )
        })
        .catch(err => {
            res.status(500).json({message: 'Error retrieving values', err})
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    Value.getValById(id)
        .then(val => {
            tvalue = val[0]
            res.status(200).json(tvalue)
        })
        .catch(err => {
            res.status(500).json({message: 'Error retrieving value', err})
        })
})

router.post('/', (req, res) => {
    const body = req.body

    Value.addVal(body)
        .then(val => {
            res.status(201).json(val)
        })
        .catch(err => {
            res.status(500).json({message: 'Error creating the value', err})
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    Value.updVal(id, body)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(err => {
            res.status(500).json({message: 'Error updating the value', err})
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    Value.delVal(id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            res.status(500).json({message: 'Error deleting the value', err})
        })
})

module.exports = router