const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/:name/:lang', (req,res) => {
    var name = req.params.name;
    var lang = req.params.lang;
    var sendMsg = true;
    res.render('index',{
        name: name,
        lang: lang,
        msg: sendMsg,
    })
})

app.listen(4000, () => {
    console.log("App is running!")
})