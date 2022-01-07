# Inicio do projeto<br>
- npm init

# Criação do arquivo principal do projeto (index.js)<br>
 - Express <br>
 *npm install express --save*<br>

 - MySQL <br>

 - EJS "Embedded JavaScript templating." *criação html*<br>
 - https://ejs.co/<br>
 *npm install ejs --save*<br>
 - (Dizer ao Express usar o EJS como View Engine)<br>
 *app.set('view engine','ejs');*<br>
 *html com extensão .ejs*

 # Renderização com express

 - Trabalhar com .render<br>
 - O Express sempre olha dentro da pasta "views"<br>
 *res.render('index')*<br>
 - Caso haja outra pasta dentro de "views" tambem poderá ser chamada<br>
 *res.render('otherfolder/filename')*<br>
 - Exibir valore de uma variavel<br>
 *<%= var %>*<br>