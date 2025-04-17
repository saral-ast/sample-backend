const express = require('express');
const app = express();

const data = {
    "name": "Arsenal",
    "address": "123 Main St",
    "city": "New York",
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');    
});