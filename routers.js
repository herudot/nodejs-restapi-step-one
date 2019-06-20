const express = require('express');
const router = express.Router();

// Endpoint using 'GET' method
router.get('/students', function(req, res){
    res.send('GET method.');
});

// Endpoint using 'POST' method
router.post('/student', function(req, res){
    console.log(req.body);
    res.send('POST method.');
});

// Endpoint using 'PUT' method
router.put('/student/:id', function(req, res){
    res.send('PUT method.');
});

// Endpoint using 'DELETE' method
router.delete('/student/:id', function(req, res){
    res.send('DELETE method.');
});

module.exports = router;