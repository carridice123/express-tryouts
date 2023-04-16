const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const homeRoutes = require('./routes/main')
const apiRoutes = require('./routes/rapperApi')
app.use(cors)
app.set('view engine', 'ejs')
app.use(express.static('public'))



app.use('/', homeRoutes)
app.use('/api/:rapperName', apiRoutes)
app.listen(port, function(){
    console.log('listening on port 3000 go and catch it');
});