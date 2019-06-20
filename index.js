const express = require('express');
const app = express();

app.listen(process.env.port || 5000, function(){
    console.log('This express is listening port 5000 by console log.');
});