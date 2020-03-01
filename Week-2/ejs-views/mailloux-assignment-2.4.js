var http = require("http");
var express = require("express");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views")); //Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); //Tell Express to use the EJS view engine
app.get("/", function(request, response) {
  response.render("index", {
    firstName: "Laurie",
    lastName: "Mailloux",
    address: "9864 W 1000 N"
  });
});
http.createServer(app).listen(8080, function() {
  console.log("EJS-Views app started on port 8080.");
});
