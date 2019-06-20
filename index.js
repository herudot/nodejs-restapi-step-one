const express = require('express');
const app = express();

app.get('/', function(req, res){
    console.log('This GET method created by express.');
    res.send({
        name: 'Heru Oktafian',
        gender: 'Male',
        age: 31
    });
});

app.listen(process.env.port || 5000, function(){
    console.log('This express is listening port 5000 by console log.');
});