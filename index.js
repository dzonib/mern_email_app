const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send({hi: 'there'})
})
app.get('/test', (req, res) => {
    res.send({newDeploySuccess: true})
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('server is running -> http://localhost:5000'))