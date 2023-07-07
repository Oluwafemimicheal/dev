const express = require('express')
const data = require('./data')

const app = express()

app.get('/api/product', (req, res) => {
    const newProduct = data.map((product) => {
        const { id, job, name } = product
        return { id, name, job }
    })
    res.json(newProduct)
})

app.get('/api/product/:id', (req, res) => {
    const { id } = req.params
    const singleProduct = data.find((product) => product.id === Number(id))
    if (!singleProduct) {
        return res.json({ success: false, data: 'Not found' })
    }
    res.json(singleProduct)
})


app.get('/api/product/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortProducts = [...data]

    if (search) {
        sortProducts = sortProducts.filter((product) => {
            product.name.startsWith(search)
        })
        return res.json(sortProducts)
    }

    if (limit) {
        sortProducts = sortProducts.slice(0, Number(limit))
    }

    if (sortProducts < 1) {
        res.status(200).json({ success: true, data: [] })
    }

    res.json(sortProducts)
})


app.all('*', (req, res) => {
    res.status(404).send('Serve cannot locate your request')
})


app.listen(5000, () => {
    console.log('Serve running on port 5000...')
})