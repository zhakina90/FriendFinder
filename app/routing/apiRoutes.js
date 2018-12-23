const path = require('path');
const express = require("express");
// const app = express();
var apirouter = express.Router();
// A GET route wcith the url `/api/friends`. This will be used to display a JSON of all 
// possible friends.

const friends = require("../models/data/friends");
// const friend = require("../../public/assets/js/friends");

apirouter.get("/api/friends", function (req, res) {
    res.json(friends);


});


// POST routes `/api/friends`. This will be used to handle incoming survey results.
//  This route will also be  used to handle the compatibility logic.

apirouter.post("/api/friends", function (req, res) {
    const userInput = req.body;
    const newUserScores = userInput.scores;

    const closestName = "";
    const closestPhoto = "";
    const totalDifference = "";

    for (var i = 0; i < friends.length; i++) {



        const difference = 0;
        for (var r = 0; r < newUserScores.lenght; r++) {
            difference += Math.abs(friends[i].scores[r] - newUserScores[r]);
        }
        if (difference < totalDifference) {
            totalDifference = difference;
            closestPhoto = friends[i].photo;
            closestName = friends[i].name;
        }
    }
    friends.push(userInput);
    res.json(closestName, closestPhoto);
});

module.exports = apirouter;