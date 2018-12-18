require('./config/config');

const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.get('/user', (req, res) => {
    res.json('GET user')
})

app.post('/user', (req, res) => {
    res.json('POST user')
})

app.put('/user/:id', (req, res) => {

    let id = req.params.id;

    res.json({id})
})

app.delete('/user', (req, res) => {
    res.json('DELETE user')
})

app.listen(PORT, () => {
    console.log(`Runnign in the port ${PORT}`);
})