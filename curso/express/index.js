const express = require('express');
const app = express();

app.get("/",
    function(req, res){
        res.send("Welcome To Server Node.js ith Express!")
    }
);

app.get("/site",
    function(req, res){
        res.send("Welcome to my site!")
    }
);

app.get("/me/linkedin",
    function(req, res){
        res.send("Welcome to my Linkedin!")
    }
);

app.get("/ola/:nome",
    function(req, res){
        res.send("Oi!")
    }
);

app.listen(4000,
    function(erro){
        if(erro){
            console.log("Server its sttoped!")
            console.log("Devido ao erro: " + erro)
        }else{
            console.log("Server its running!")
        }
    }
)