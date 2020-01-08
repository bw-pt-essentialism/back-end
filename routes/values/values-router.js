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
})