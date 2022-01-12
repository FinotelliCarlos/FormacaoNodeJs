const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/:name/:lang', (req,res) => {
    var name = req.params.name;
    var lang = req.params.lang;
    var sendMsg = true;
    var products = [
        {name: "Doritos",price: 3.14},
        {name: "Coca-Cola",price: 5.50},
        {name: "Leite",price: 3.74},
    ]
    res.render('index',{
        name: name,
        lang: lang,
        msg: sendMsg,
        products: products
    })
})

app.listen(4000, () => {
    console.log("App is running!")
})