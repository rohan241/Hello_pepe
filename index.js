const express = require('express')
const app = express()
const port = 80;
var body_parser = require('body-parser');

app.use(body_parser.urlencoded({ extended: false }))
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/form', (req, res) => {
    const username = req.body.username
    // const passowrd = req.body.password
    res.send('<p>Hola ' + username + ' </p>');

})

app.listen(process.env.PORT || 80);