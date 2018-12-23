const express = require("express");
const app = express();
var path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const apiroutes = require("./app/routing/apiRoutes");

app.use(apiroutes);

const htmlroutes = require("./app/routing/htmlRoutes");

app.use(htmlroutes);

app.use(express.static('public'));
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
