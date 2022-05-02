const express = require('express');
const axios = require('axios')


const app = express()

app.get('/', async(req, res) => {
    var ip = await axios.get('https://api.myip.com')
    res.send(ip.data['ip'])
})

app.listen(8000)