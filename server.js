var exphbs = require("express-handlebars");
var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.json(express.json());
app.engine("handlebars", exphbs({ defaultLayout:"main"}));
app.set("view.engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err) {
        console.error("")
    }
}
app.get("/")