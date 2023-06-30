const express = require('express')
const data = require('./data')
const app = express()


app.get('/', (req, res) => res.send('<h1>Home Page</h1><a href="/api/product">Get Products</a>'))

// getting all item in the API data
app.get('/api/product', (req, res) => {
    const newProduct = data.map((product) => {
        const { id, job, name, schooling } = product
        return { id, job, name, schooling }
    })
    res.json(newProduct)
});

// getting a single item form the API data
app.get('/api/product/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = data.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        res.status(404).send('<p>Product not found</p><a href="/api/product">Check other product</a>')
    }
    res.json(singleProduct)
});

//Query string routing
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProduct = [...data]

    if (search) {
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }
    if (sortedProduct < 1) {
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProduct)
})