const express = require("express");
const app = express();
const port = '4000';
const bodyParser = require('body-parser');

// viewEngine
app.set("view engine", "ejs");
app.use(express.static("public"));

// bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ask", (req, res) => {
  res.render("ask");
});

app.post('/saveask', (req,res) =>{
  var title = req.body.title;
  var description = req.body.description;
  res.send('Recebemos os seguintes dados = Titulo: ' + title + ' Descrição: ' + description)
}); 

app.listen(port, () => {
  console.log("App is running in port " + 'http://localhost:' + port);
});
