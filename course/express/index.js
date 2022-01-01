const express = require('express')
const app = express()

/*Rota Home*/
app.get("/",
    function(req, res){
        res.send("Welcome To Server Node.js ith Express!")
    }
)

/*Rota com parametros Não Obrigatorios */
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


/*Rota com query Params */
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

/*Rota com parametros obrigatorios */
app.get("/ola/:nome/:empresa",
    function(req, res){
        var nome = req.params.nome
        var empresa = req.params.empresa
        res.send("Profissional:" + nome + ", da Empresa: " + empresa + " Trabalhara conosco!") 
    }
)

app.listen(4000,
    function(erro){
        if(erro){   /*Caso o servidor não funcione recebera o erro e informa-lo*/
            console.log("Server its sttoped!")
            console.log("Devido ao erro: " + erro)
        }else{  /*Servidor rodando normalmente*/
            console.log("Server its running!")
        }
    }
)