const express = require('express');
const app = express();

// Initialize body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Initialize routers with prefix '/api'
const routers = require('./routers');
app.use('/api',routers);

app.listen(process.env.port || 5000, function(){
    console.log('This express is listening port 5000 by console log.');
});