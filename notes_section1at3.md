# Node.Js
-Javascript é uma linguagem criada para rodar em navegadores.<br>
-*Node.JS é um interpretador Javascript, que roda fora de navegadores.*

# Instalação Node.Js
- https://nodejs.org/en/

# RunCode Node.js
-Rodar Codigo ( node app.js )

# Modulos
-É importante exportar funções e ou variaveis quando for necessario utilizar em outro local.<br>
*module.exports = unica;*<br>
*module.exports = {mais, de, uma};*<br><br>
-É necessario importar o arquivo e função como variavel.<br>
*var importarFuncao = require("./arquivo")*<br>
*importarFuncao.funcao* (Após o ponto vem a função importada quando ouver mais de uma.)

# Http
-Criação de um servidor http<br>
*var http = require("http");*<br>
*http.createServer().listen(8181);*

# Instalação Express
- https://expressjs.com/pt-br/<br>
*npm install express --save*<br>
-Carregar express dentro de uma variavel<br>
*const app = express();*

# Rotas
-Define portas da sua aplicação.<br>
-É possivel criar quantas rotas for necessario.<br>
*app* -São enviados 2 parametros para a função.<br>
    *.get("/",function(req, res){* - A rota "/" ou "/outrarota" e a função que a rota terá.<br>
    *res.send("Welcome To Server Node.js With Express!")* - Conteudo da rota.<br>
*});*

# Carregamento Automatico
# Nodemon
- https://www.npmjs.com/package/nodemon<br>
*npm install -g nodemon*<br> - instalação global com -g
*nodemon index.js* - No terminal 

# Parametros
*REQ => Resposta enviada pelo usuario*<br>
*RES => Resposta enviada para o usuario*<br>
-É possivel ter quantos parametros for necessario.<br>
*"/site/:nome/:empresa"* -O parametro é chamado após dois pontos na rota chamada.<br>
*var nome = req.params.nome*<br>
*var empresa = req.params.empresa*

# Parametro Obrigatorio
*/site/:nome/:empresa*
# Parametro Não Obrigatorio
*/site/:nome?/:empresa?*

# Query Params
- Parametro que não é fixo na rota e não são definidos na rota.<br>
*/site/?usuario=carlos_finotelli*
