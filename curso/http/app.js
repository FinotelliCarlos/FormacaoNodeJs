var http = require("http");

http.createServer(
    function(req,res){
        res.end("Welcome to server!")
    }
).listen(8181);
console.log("Server is running at port: http://localhost:8181")


http.createServer().listen(8181);