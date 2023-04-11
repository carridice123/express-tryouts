const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors)
const port = process.env.PORT || 3000
 app.use(cors)
app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html');
});

app.listen(port, function(){
    console.log('listening on port 3000');
});