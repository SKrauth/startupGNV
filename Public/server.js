var express = require("express");
var server = express();

server.use(__dirname+"/public");

server.get("/", function(req, res){
  res.sendFile("public/index.html")
});

server.listen(8080, function(){
  console.log("Server now listening on port 8080")
})
