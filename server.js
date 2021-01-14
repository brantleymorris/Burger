var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// allow access to public folder when server is rurnning
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" })); // double check this
app.set("view engine", "handlebars");

// import router
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});