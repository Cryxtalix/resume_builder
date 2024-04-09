const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

let json = require('./info.json');

// Define a route to render the EJS file
app.get('/', (req, res) => {
    res.render('index', { name: json.name });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
