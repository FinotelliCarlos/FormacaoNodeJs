# Formação Node.Js
-Javascript é uma linguagem criada para rodar em navegadores.
-*Node.JS é uma interpretador Javascript, que roda fora de navegadores.*

# Instalação Node.Js
- https://nodejs.org/en/

# RunCode Node.js
-Rodar Codigo ( node app.js )

# Modulos
-É importante exportar funções e ou variaveis quando for necessario utilizar em outro local.
*module.exports = unica;*
*module.exports = {mais, de, uma};*
-É necessario importar o arquivo e função como variavel.
*var importarFuncao = require("./arquivo")*
*importarFuncao.funcao* (Após o ponto vem a função importada quando ouver mais de uma.)

# Http
-Criação de um servidor http
*var http = require("http");*

# Instalação Express
- https://expressjs.com/pt-br/
*npm install express --save*
-Carregar express dentro de uma variavel
*const app = express();*