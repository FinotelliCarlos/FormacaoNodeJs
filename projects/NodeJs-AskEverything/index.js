const express = require("express");
const app = express();
const port = '4000';

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ask", (req, res) => {
  res.render("ask");
});

app.post('/saveask', (req,res) =>{
  res.send('Form received.')
}); 

app.listen(port, () => {
  console.log("App is running in port " + 'http://localhost:' + port);
});
