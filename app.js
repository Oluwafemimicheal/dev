const express = require('express')
const path = require('path')
const app = express()
const { logger, authorize } = require('./middleware')

// req=> Middleware =>res

//app.use(logger) // can also apply a path which make all that path route to access the logger functionality example: /api/product

app.get('/', (req, res) => {
        res.send('<h1>Middleware Page</h1><a href="/logger">Check Middleware</a>')
    })
    // app.use(express.static('./form'))
app.use(express.urlencoded({ extended: false }))

app.get('/form', (req, res) => {
    res.sendFile(path.resolve('./form/contact.html'))
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    console.log(name)
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide Credentials')
})

app.get('*', (req, res) => res.status(404).send('<h1>Page not found</h1><a href="/">Item</a>'))




app.listen(5000, () => {
    console.log('Middleware is running on 5000...')
})