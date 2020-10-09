const express = require('express')
const app = express()
const port = 3000
app.set('view engine' , 'pug')
app.set('views' , './views')
app.get('/', (req, res) => {
  res.render('index' , {
      name : 'aaaa'
  })
})

app.get('/user', (req, res) => {
    res.render('users/index' , {
        users : user
    })
})
var user = [
    {id : 1 , name : 'Nguyen quang bao'},
]
app.get('/users/search' , (req , res) => {
    let q = req.query.q

    let matchedUsers = user.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    res.render('users/index' , {
        users : matchedUsers,
        question : q
    })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})