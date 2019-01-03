# Lucas Consejo & Théo Ferreira - TP API Todolist

Ingésup B2B Bordeaux

Le 03/01/2019

Lien git : [lucasconsejo/API_Todolist](https://github.com/lucasconsejo/API_Todolist)

## Description du projet
Le but du TP est de créer une todolist sous forme d'API, en utilisant le framework express.
L'API devait être multiformat et devait répondre au format HTML, mais également au format JSON.

## Pré-requis
* Assurez-vous d'avoir un environnement Node JS d'installé (si ce n'est pas le cas, [Télécharger Node JS](https://nodejs.org/en/)).
* Avoir un serveur web avec mysql (De notre côté, nous avons utilisé XAMPP).

## Tables SQL utilisées 

* **todos** (todoId, message, completion, createdAt, updatedAt, userId)
* **users** (userId, firstname, lastname, username, password, email, createdAt, updatedAt)

## Installation du projet
Une fois le projet cloné :
* Dans le dossier du projet : exécutez ***npm install*** pour récupérer les node_modules.
* Créez une base de données, nommez la : ***node_js***
* Importez le fichier sql [node_js.sql](https://github.com/lucasconsejo/API_Todolist/blob/master/bdd/node_js.sql), dans votre base de données, afin d'importer les différentes tables.
* Dans le fichier [bdd.js](https://github.com/lucasconsejo/API_Todolist/blob/master/bdd/bdd.js), remplacez *user* et *password* par vos identifiants de votre base de données mysql.

## Le projet

### `Lancer le serveur`

Dans le dossier du projet : exécutez ***node ./server.js*** pour lancer le serveur.
Par défaut, le serveur écoutera sur le **port 8080**.

### `Rendu HTML`
Voici les url disponibles au format HTML :
* http://localhost:8080/ (Redirect to /todos)
* http://localhost:8080/todos Affiche toutes les todos
* http://localhost:8080/users Affiche tous les users
* http://localhost:8080/todos/add Ajouter une todo
* http://localhost:8080/todos/:todoId Afficher une todo
* http://localhost:8080/todos/:todoId/edit Editer une todo
* http://localhost:8080/users/add Ajouter un user
* http://localhost:8080/users/:userId Afficher un user
* http://localhost:8080/users/:userId/edit Editer un user
* http://localhost:8080/users/:userId/todos Afficher tous les todos d'un user

### `Rendu JSON`
Voici les url disponibles au format JSON :
* **GET** http://localhost:8080/todos Renvoi la liste de toutes les todos
* **GET** http://localhost:8080/users Renvoi la liste de tous les users
* **GET** http://localhost:8080/todos/:todoId Renvoi une todo
* **GET** http://localhost:8080/users/:userId Renvoi un user
* **POST** http://localhost:8080/todos Renvoi le message "success"
* **POST** http://localhost:8080/users Renvoi le message "success"
* **PATCH** http://localhost:8080/todos/:todoId Renvoi le message "success"
* **PATCH** http://localhost:8080/users/:userId Renvoi le message "success"
* **DELETE** http://localhost:8080/todos/:todoId Renvoi le message "success"
* **DELETE** http://localhost:8080/users/:userId Renvoi le message "success"

### `Error 404`
Si l'url saisie est incorrecte, alors le serveur retournera :
* **Page Not Found** avec la liste des url disponibles => Rendu HTML
* **Status: 404 not found** => Rendu JSON

## Modules utilisés 
* **mysql** : pour la connexion avec la base de données
* **express** : pour le serveur http
* **method-override** : pour pouvoir utiliser des formulaires PATCH
* **ejs** : pour faire le rendu HTML de toutes les roots.
