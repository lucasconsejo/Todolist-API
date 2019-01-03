const connexion = require('../bdd/bdd.js')
const bcrypt = require('bcrypt-nodejs')

module.exports = {

    /*********REQUEST TODOLIST**********/

    // SELECT ALL TODOS
    selectAllTodos(res){
        let sql = "SELECT * FROM todos";
        connexion.query(sql, function (err, result, fields) {
            if (err){
                return err
            }
            else{
                res.format({
                    html: () => { 
                        res.status(200)
                        res.render('todos/index',{
                            title: 'List of all todos',
                            todos: result
                        })
                    },
                    json: () => {
                        res.status(200)
                        res.json(result).end()
                    }
                })
            }
        })
    },

    // SELECT 1 TODO
    selectTodo(res, id){
        let sql = "SELECT * FROM todos where todoId="+id
        connexion.query(sql, function (err, result, fields) {
            if(err){
                return err
            }
            else{
                res.format({
                    html: () => { 
                        res.render('todos/show',{
                            todos: result
                        }) 
                    },
                    json: () => {
                        res.status(200)
                        res.json(result).end()
                    }
                })
            }
        })
    },

    // INSERT TODO
    insertTodo(userId, message, completion){
        let sql = "INSERT INTO todos (todoId, message, completion, createdAt, updatedAt, userId) VALUES (NULL, '"+message+"', '"+completion+"', NOW(), 'none', "+userId+")"
        connexion.query(sql, function (err, result) {
            if(err){
                return err
            }
            else{
                console.log("--> INSERT Todo")
            }
        })
    },

    // UPDATE TODO
    updateTodo(id, completion){
        let sql = "UPDATE todos SET completion='"+completion+"', updatedAt=NOW() WHERE todoId="+id;
        connexion.query(sql, function (err, result) {
            if(err){
                return err
            }
            else{
                console.log("--> UPDATE Todo")
            }
        })
    },

    // DELETE TODO
    deleteTodo(id){
        let sql = "DELETE FROM todos WHERE todoId="+id
        connexion.query(sql, function (err, result) {
            if(err){
                return err
            }
            else{
                console.log("--> DELETE Todo")
            }
        })
    },
    

    /*********REQUEST USERS**********/

    // SELECT ALL USERS
    selectAllUsers(res){
        let sql = "SELECT * FROM users";
        connexion.query(sql, function (err, result, fields) {
            if(err){
                return err
            }
            else{
                res.format({
                    html: () => { 
                        res.render('users/index',{
                            title: 'List of all users',
                            users: result
                        }) 
                    },
                    json: () => {
                        res.status(200)
                        res.json(result).end()
                    }
                })
            }
        })
    },

    // SELECT ALL TODOS OF A USER
    selectTodosUser(res, userId){
        let sql = "SELECT * FROM todos INNER JOIN users ON todos.userId = users.userId where users.userId="+userId
        connexion.query(sql, function (err, result, fields) {
            if(err){
                return err
            }
            else{
                res.format({
                    html: () => { 
                        res.render('users/show',{
                            showAllTodos: "true",
                            users: result
                        }) 
                    },
                    json: () => {
                        res.json(result) 
                        res.status(200).end()
                    }
                })
            }
        })
    },

    // SELECT 1 USER
    selectUser(res, id){
        let sql = "SELECT * FROM users where userId="+id
        connexion.query(sql, function (err, result, fields) {
            if(err){
                return err
            }
            else{
                res.format({
                    html: () => { 
                        res.render('users/show',{
                            showAllTodos: "false",
                            users: result
                        }) 
                    },
                    json: () => {
                        res.json(result) 
                        res.status(200).end()
                    }
                })
            }
        })
    },

    // UPDATE USER
    updateUser(id, firstname, lastname, username, password, email){
        bcrypt.hash(password, null, null, function(err, hash) {
            let password_hash = hash
            let sql = "UPDATE users SET firstname='"+firstname+"', lastname='"+lastname+"', username='"+username+"', password='"+password_hash+"', email='"+email+"', updatedAt=NOW() WHERE userId="+id
            connexion.query(sql, function (err, result) {
                if(err){
                    return err
                }
                else{
                    console.log("--> UPDATE USER")
                }
            })
        })
    },

    // INSERT USER
    insertUser(firstname, lastname, username, password, email){
        bcrypt.hash(password, null, null, function(err, hash) {
            let password_hash = hash
            let sql = "INSERT INTO users (userId, firstname, lastname, username, password, email, createdAt, updatedAt) VALUES (NULL, '"+firstname+"', '"+lastname+"', '"+username+"', '"+password_hash+"', '"+email+"', NOW(), 'none')";
            connexion.query(sql, function (err, result) {
                if(err){
                    return err
                }
                else{
                    console.log("--> INSERT USER")
                }
            })
        })
    },

    // DELETE USER
    deleteUser(id){
        let sql = "DELETE FROM users WHERE userId="+id;
        connexion.query(sql, function (err, result) {
            if(err){
                return err
            }
            else{
                console.log("--> DELETE USER")
            }
        })
    }
}