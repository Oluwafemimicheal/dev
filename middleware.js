const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const data = new Date().getFullYear()
    console.log(method, url, data)
    next()
}
const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'oluwafemi') {
        req.user = { name: 'Oluwafemi', id: 4 }
        next()
    } else {
        res.status(401).send('User not Unauthorized')
    }
    console.log('authorized')
}

module.exports = { logger, authorize }