const express = require("express");
const app = express();

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

app.listen(4000, () => {
  console.log("App is running!");
});
