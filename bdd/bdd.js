var mysql = require('mysql');

// CONNEXION à la BDD
var connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js"
  });

connexion.connect(function(err) {
    if(err){
      console.log("Connexion avec mysql --> Refusé\n"+err+"\nVerifiez la saisie dans mysql/createConnection (bdd/bdd.js ligne 4)")
    }
    else{
      console.log("Connexion avec mysql --> REUSSI")
    }
  });

module.exports = connexion
