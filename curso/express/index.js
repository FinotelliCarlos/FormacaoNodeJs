const express = require('express')
const app = express()

app.get("/",
    function(req, res){
        res.send("Welcome To Server Node.js ith Express!")
    }
)

app.get("/site/:artigo?",
    function(req, res){
        var artigo = req.params.artigo;
        if(artigo){
            res.send("Artigo: "+ artigo)
        }else{
            res.send("Welcome to my site!")
        }

    }
)

app.get("/me/linkedin", 
    function(req, res){
        var usuario = req.query['usuario'];

        if(usuario){
            res.send("Welcome to my Linkedin! = User: " + usuario)

        }else{
            res.send("Welcome to my Linkedin!")
        }
    }
)

app.get("/ola/:nome/:empresa",
    function(req, res){
        var nome = req.params.nome
        var empresa = req.params.empresa
        res.send("Profissional:" + nome + ", da Empresa: " + empresa + " Trabalhara conosco!") 
    }
)

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