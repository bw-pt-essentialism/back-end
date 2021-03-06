const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if(req.decodedJwt) {
        next()
    } else if(token) {
        jwt.verify(token, 'banananutmuffin?!1/', (err, decodedJwt) => {
            if (err) {
                res.status(401).json({ message: 'Failed to verify authorization' })
            } else {
                req.decodedJwt = decodedJwt
                next()
            }
        })
    } else {
        res.status(401).json({message: "Failed to verify authorization"})
    }
}