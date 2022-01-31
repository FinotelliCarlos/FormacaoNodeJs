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
 - É possivel passar valor de variaveis como segundo parametro no *'.render'*<br>
    *var nome = req.params.nome;*<br>
    *var lang = req.params.lang;*<br>
    *res.render('index',*<br>
    *{*<br>
        *nome: nome,*<br>
        *lang: lang,*<br>
    *})*

# Estruturas condicionais com EJS
 - Exibir valore de uma variavel (Contem sinal de igual "=")<br>
    *<%= var %>*<br>
 - Trabalhar com expreções (Sem o sinal de igual "=" para condições)<br>
    *<% if()else() %>*<br>
 - Controlar oque é exibido em tela conforme condições<br>
*<% if(msg === true){ %>*<br>
    *<strong>Error Message!</strong>*<br>
*<% } else { %>*<br>
    *<strong>We not have error Messages!</strong>*<br>
*<% } %>*

# Estrutura de repetição com EJS
 - Utilizando 'forEach()' (Para cada)<br>
 *list.forEach( function(list) { })*

 # Arquivos Estaticos
 - Arquivos que não são processados no back-end<br>
  *CSS*<br>
  *Javascript(Front-end)*<br>
  *Imagens*<br>
  *Dados*<br>
 Etc...<br>
 - Linha de comando que permite utilizar arquivos estaticos<br>
*app.use(express.static('public'))*

# Instalação Bootstrap
 - https://getbootstrap.com/<br>
 - Através do pacote baixado do bootstrap são disponibilizados 2 pastas (css,js), extrair as duas na pasta public<br>
 - Para utilizar o Bootstrap deve-se aprender ou estudar classes já nomeadas para determinados estilos

 # Utilização de partials
  - São partes do meu codigo html transformadas em componente para reutilização.<br>
 Importar componente: *<%- include ("./partials/componentename.ejs") %>*<br>