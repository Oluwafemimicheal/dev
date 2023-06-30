const express = require('express')
const app = express()
const { logger, authorize } = require('./middleware')

// req=> Middleware =>res

app.use(logger) // can also apply a path which make all that path route to access the logger functionality example: /api/product

app.get('/', (req, res) => {
    res.send('<h1>Middleware Page</h1><a href="/logger">Check Middleware</a>')
})
app.get('/about', (req, res) => {
    res.send('<h1>Middleware Page About Section</h1><a href="/logger">Check Middleware</a>')
})

app.get('/api/products', authorize, (req, res) => {
    console.log(req.user)
    res.send('<h1>Products</h1><a href="/logger">Check Middleware</a>')
})
app.get('/api/item', authorize, (req, res) => {
    res.send('<h1>Items</h1><a href="/logger">Products</a>')
})


app.get('*', (req, res) => res.status(404).send('<h1>Page not found</h1><a href="/">Item</a>'))




app.listen(5000, () => {
    console.log('Middleware is running on 5000...')
})