const express = require('express');
const app = express();

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