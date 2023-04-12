const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', function(req, res){
    res.sendFile(__dirname + 'home.html');
});

app.listen(port, function(){
    console.log('listening on port 3000 go and catch it');
});