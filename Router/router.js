const express = require('express');
const NewModel = require('../Model/model')
const routers = express();

routers.get('/', (req, res) => {
    console.log('Get request made')
    NewModel.find()
    console.log('Data is being requested from the DB')
    console.log(req.body)
})


routers.post('/add', (req, res) => {
    const newModel = new NewModel({
        username: req.body.username,
        password: req.body.password
    })
    console.log('Post is on it on it\'s way to the DB')

    newModel.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json('Error: ' + err))
    console.log('It has been saved!')
    console.log(req.body)
})



module.exports = routers;