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

app.post("/listfriends", function(req, res) {
  var newfriend = req.body;
  console.log(newfriend);
  friends.push(newfriend);
  res.json(newfriend);

  //find  match

  var total = friends.length-1;
  var bestmatch = 50;
  var deltamatch = 0;
  var bestFriend = "";
  var bestPicture = "";
  for (i=0; i<total-1; i++) {
        d1=Math.abs(parseInt(friends[i].q1)-parseInt(friends[total].q1));
        d2=Math.abs(parseInt(friends[i].q2)-parseInt(friends[total].q2));
        d3=Math.abs(parseInt(friends[i].q3)-parseInt(friends[total].q3));
        d4=Math.abs(parseInt(friends[i].q4)-parseInt(friends[total].q4));
        d5=Math.abs(parseInt(friends[i].q5)-parseInt(friends[total].q5));
        d6=Math.abs(parseInt(friends[i].q6)-parseInt(friends[total].q6));
        d7=Math.abs(parseInt(friends[i].q7)-parseInt(friends[total].q7));
        d8=Math.abs(parseInt(friends[i].q8)-parseInt(friends[total].q8));
        d9=Math.abs(parseInt(friends[i].q9)-parseInt(friends[total].q9));
        d10=Math.abs(parseInt(friends[i].q10)-parseInt(friends[total].q10));
        deltamatch = d1+d2+d3+d4+d5+d6+d7+d8+d9+d10;
        if (deltamatch<bestmatch) {
          bestmatch = deltamatch;
          bestFriend = friends[i].name;
          bestPicture = friends[i].picture;
        }
  }
  console.log("Done");
  console.log("Your best friend is:"+bestFriend);
  console.log("Picture of your best friend: "+bestPicture);
  alert("Your best friend is:");
});







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });