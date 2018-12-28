const connexion = require('../bdd/bdd.js')
const bcrypt = require('bcrypt-nodejs')

module.exports = {

    /*********REQUEST TODOLIST**********/

    selectAll(res){
        let sql = "SELECT * FROM todos";
        connexion.query(sql, function (err, result, fields) {
        if (err) throw err;
            console.log("--> SELECT ALL Todos")
            res.format({
                html: () => { 
                res.render('todos/index',{
                    title: 'Liste de toutes les tâches',
                    todos: result
                }) 
                },
                json: () => {
                res.json(result) 
                }
            })
        })
    },
    selectTodo(res, id){
        let sql = "SELECT * FROM todos where todoId="+id
        connexion.query(sql, function (err, result, fields) {
        if (err) throw err;
            console.log("--> SELECT todoId"+id)
            res.format({
                html: () => { 
                res.render('todos/show',{
                    todos: result
                }) 
                },
                json: () => {
                res.json(result) 
                }
            })
        });
    },
    insertTodo(message, completion){
        connexion.connect(function(err) {
            let sql = "INSERT INTO todos (todoId, message, completion, createdAt, updatedAt, userId) VALUES (NULL, '"+message+"', '"+completion+"', NOW(), 'none', NULL)"
            connexion.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("--> INSERT Todo")
            })
        })
    },
    updateTodo(id, completion){
        connexion.connect(function(err) {
            let sql = "UPDATE todos SET completion='"+completion+"', updatedAt=NOW() WHERE todoId="+id;
            connexion.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("--> UPDATE Todo")
            })
        })
    },
    deleteTodo(id){
        connexion.connect(function(err) {
            let sql = "DELETE FROM todos WHERE todoId="+id
            connexion.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("--> DELETE Todo")
            })
        })
    },
    

    /*********REQUEST USERS**********/

    selectAllUsers(res){
        connexion.connect(function(err) {
            let sql = "SELECT * FROM users";
            connexion.query(sql, function (err, result, fields) {
                if (err) throw err;
                    console.log("--> SELECT ALL USERS")
                    res.format({
                        html: () => { 
                            res.render('users/index',{
                                title: 'Liste de tous les users',
                                users: result
                            }) 
                        },
                        json: () => {
                            res.json(result) 
                        }
                    })
            })
        })
    },
    selectUser(res, id){
        let sql = "SELECT * FROM users where userId="+id
        connexion.query(sql, function (err, result, fields) {
        if (err) throw err;
            console.log("--> SELECT userId="+id)
            res.format({
                html: () => { 
                res.render('users/show',{
                    users: result
                }) 
                },
                json: () => {
                res.json(result) 
                }
            })
        });
    },
    updateUser(id, firstname, lastname, username, password, email){
        connexion.connect(function(err) {
            bcrypt.hash(password, null, null, function(err, hash) {
                let password_hash = hash
                let sql = "UPDATE users SET firstname='"+firstname+"', lastname='"+lastname+"', username='"+username+"', password='"+password_hash+"', email='"+email+"', updatedAt=NOW() WHERE userId="+id;
                connexion.query(sql, function (err, result) {
                    if (err) throw err;
                        console.log("--> UPDATE USER");
                })
            });
        })
    },
    insertUser(firstname, lastname, username, password, email){
        connexion.connect(function(err) {
            bcrypt.hash(password, null, null, function(err, hash) {
                let password_hash = hash
                let sql = "INSERT INTO users (userId, firstname, lastname, username, password, email, createdAt, updatedAt) VALUES (NULL, '"+firstname+"', '"+lastname+"', '"+username+"', '"+password_hash+"', '"+email+"', NOW(), 'none')";
                connexion.query(sql, function (err, result) {
                    if (err) throw err;
                        console.log("--> INSERT USER");
                })
            })
        })
    },
    deleteUser(id){
        connexion.connect(function(err) {
            let sql = "DELETE FROM users WHERE userId="+id;
            connexion.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("--> DELETE USER");
            })
        })
    },
}