var mysql = require('mysql');

// CONNEXION à la BDD
var connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js"
  });

connexion.connect(function(err) {
    if (err) throw err;
        console.log("Connexion avec mysql --> REUSSI");
  });

module.exports = connexion
