#!/usr/bin/env node

// MODULES NECESSAIRES
const express = require('express')
const bodyParser = require('body-parser') 
const path = require('path') 
const methodOverride = require('method-override')

// REQUEST BDD
const requestSQL = require('./models/requestBdd.js')

let server = express()
let PORT = 8081

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(methodOverride('_method'))
server.use(express.static(path.join(__dirname, '/public')))

server.set('views', './views')
server.set('view engine', 'ejs')

// POST /todos
server.post('/todos', (req, res, next) =>{
    requestSQL.insertTodo(req.body.message, req.body.completion)
    res.format({
      html: () => { 
        res.redirect(301, "/todos")
      },
      json: () => {
        res.status(200).end()
      }
    })
})


// GET /todos/add
server.get('/todos/add', (req, res, next) =>{
    res.render('todos/edit',{
        title: 'Add Todos',
        todos: "add"
      }) 
})


// GET /todos/:todoId
server.get('/todos/:todoId', (req, res, next) =>{
    if (!req.params.todoId) {
        return res.status(404).send('NOT FOUND');
    }
    else{
        requestSQL.selectTodo(res, req.params.todoId)
    }
})


// GET /todos/:todoId/edit
server.get('/todos/:todoId/edit', (req, res, next) =>{
    res.render('todos/edit',{
        title: 'Edit Todos',
        todos: "edit",
        id: req.params.todoId
      }) 
})


// GET /todos
server.get('/todos', (req, res, next) =>{
    requestSQL.selectAll(res)
})


// DELETE /todos/:todoId
server.delete('/todos/:todoId', (req, res, next) =>{
    if (!req.params.todoId) {
        return res.status(404).send('NOT FOUND');
    }
    else{
        requestSQL.deleteTodo(req.params.todoId)
        res.format({
            html: () => { 
                res.redirect(301, "/todos")
            },
            json: () => {
                res.status(200).end()
            }
        })
    }
})


// PATCH /todos/:todoId
server.patch('/todos/:todoId', (req, res, next) =>{
    if (!req.params.todoId) {
        return res.status(404).send('NOT FOUND');
    }
    else{
        requestSQL.updateTodo(req.params.todoId, req.body.completion)
        res.format({
            html: () => { 
                res.redirect(301, "/todos")
            },
            json: () => {
                res.status(200).end()
            }
        })
    }
})

// CREATE
server.post('/users', (req, res, next) =>{
    requestSQL.insertUser(req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.email)
    res.format({
        html: () => { 
          res.redirect(301, "/users")
        },
        json: () => {
          res.status(200).end()
        }
      })
})

server.get('/users/add', (req, res, next) =>{
    res.render('users/edit',{
        title: 'Add User',
        users: "add user"
      }) 
})

server.get('/users/:userId', (req, res, next) =>{
    if (!req.params.userId) {
        return res.status(404).send('NOT FOUND');
    }
    else{
        requestSQL.selectUser(res, req.params.userId)
    }
})

// GET /users/:userId/edit
server.get('/users/:userId/edit', (req, res, next) =>{
    res.render('users/edit',{
        title: 'Edit User',
        users: "edit",
        id: req.params.userId
      }) 
})

// READ
server.get('/users', (req, res, next) =>{
    requestSQL.selectAllUsers(res)
})

//UPDATE
server.patch('/users/:userId', (req, res, next) =>{
    requestSQL.updateUser(req.params.userId, req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.email)
    res.format({
        html: () => { 
            res.redirect(301, "/users")
        },
        json: () => {
            res.status(200).end()
        }
    })
})

//DELETE
server.delete('/users/:userId', (req, res, next) =>{
    if (!req.params.userId) {
        return res.status(404).send('NOT FOUND');
    }
    else{
        requestSQL.deleteUser(req.body.userId)
        res.format({
            html: () => { 
                res.redirect(301, "/users")
            },
            json: () => {
                res.status(200).end()
            }
        })
    }
})


// GET *
server.get("*", (req, res, next) =>{
    res.redirect(301, '/todos')
})

// ALL /
server.all('/', (req, res, next) =>{
    res.redirect(301, '/todos')
})

server.use((req, res) => {  
    res.status(404)  
    res.end('Not Found')
})

// Server start listen
server.listen(PORT, () =>{
    console.log('Le serveur vient de se lancer et écoute sur le port ', PORT)
})