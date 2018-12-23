const express = require("express");
// const app = express();
var htmlrouter = express.Router();

const exphbs = require("express-handlebars");
// const survey = require("");
// const index = require("../views/index");
//  A GET Route to `/survey` which should display the survey page.
// A default, catch-all route that leads to `home.html` which displays the home page.


htmlrouter.get('/', function (req, res) {
    console.log(res);
    // res.send("index");
    res.render("index");
});


htmlrouter.get("/survey", function (req, res) {

    res.render("survey");
});


module.exports = htmlrouter;