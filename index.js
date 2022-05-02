const express = require('express');

const app = express()

app.get('/', (req, res) => {
    var ip = req.ip
    res.send(ip)
})

app.listen(8000)