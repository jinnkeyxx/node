const db = require('../db')
const shortid = require('shortid')


module.exports = {
    "index": (req, res) => {
        res.render('users/index', {
            users: db.get('user').value(),
            title: "Helle",
        })
    },
    "search": (req, res) => {
        let q = req.query.q

        let matchedUsers = db.get('user').value().filter((user) => {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        })
        res.render('users/index', {
            users: matchedUsers,
            question: q
        })
    },
    "create": (req, res) => {
        req.body.id = shortid.generate();
        console.log(req.body)
        db.get('user').push(req.body).write()

        res.redirect('/users')
    },
    "view": (req, res) => {
        let id = req.params.id

        let user = db.get('user').find({ id: id }).value()
        res.render('users/view', {
            user: user
        })
    }
}