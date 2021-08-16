const logoutRouter = require('express').Router()

logoutRouter.get('/', (req, res) => {
    req.session.destroy( err => {
        if (err) {
            return res.status(500).json({"error": err.message})
        }
        res.status(200).end()
    })
})
module.exports = logoutRouter