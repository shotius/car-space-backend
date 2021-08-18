const logoutRouter = require('express').Router()

logoutRouter.get('/', async (req, res) => {
    delete req.session.userId
    delete req.session.token
    await req.session.destroy( err => {
        if (err) {
            return res.status(500).json({"error": err.message})
        }
    })
    res.send('removed session information')
})
module.exports = logoutRouter