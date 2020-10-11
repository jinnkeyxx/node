const express = require('express')
const router = require('./router/user.router');
const port = 3000
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')
app.set('views', './views')
app.get('/', (req, res) => {
    res.render('index', {
        name: 'aaaa',
        title: "hello"
    })
})
app.use(express.static('public'))
app.use('/users', router)

app.listen(port, () => {
    console.log(`Example router listening at http://localhost:${port}`)
})