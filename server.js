// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var friends = [
  {
    name: "redblahblah",
    picture: "red",
    q1: 4,
    q2: 2,
    q3: 3,
    q4: 5,
    q5: 1,
    q6: 2,
    q7: 4,
    q8: 5,
    q9: 2,
    q10: 3
  },
  {
    name: "pinkblahblah",
    picture: "pink",
    q1: 1,
    q2: 4,
    q3: 1,
    q4: 3,
    q5: 5,
    q6: 2,
    q7: 4,
    q8: 2,
    q9: 5,
    q10: 5
  },
  {
    name: "bluegreenblahblah",
    picture: "bluegreen",
    q1: 1,
    q2: 5,
    q3: 2,
    q4: 5,
    q5: 1,
    q6: 3,
    q7: 1,
    q8: 4,
    q9: 2,
    q10: 3
  }
];


// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

// Displays all characters
app.get("/listfriends", function(req, res) {
  return res.json(friends);
});








app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });