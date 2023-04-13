const express = require('express')
const app = express()
app.use(express.static('public'))

const port = process.env.PORT || 3000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illisndis'
    },
    'dylan':{
        'age': 30,
        'birthName': 'Mario Dylan',
        'birthLocation': 'London, England'
    }
}

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html');
});

app.get('/api/:rapperName', (req, res)=>{
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
})
app.listen(port, function(){
    console.log('listening on port 3000 go and catch it');
});