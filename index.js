require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Default to port 3000 if PORT is undefined

console.log('Environment Variables:', process.env);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.get('/contact', (req, res) => {
    res.send('This is contact page');
});

app.get('/honey', (req, res) => {
    res.send('I love u kannamma');
});

app.get('/kanna', (req, res) => {
    res.send('<h1>This is Manikanta from kanna route</h1>');
});

app.listen(port, (err) => {
    if (err) {
        console.error(`Failed to start server: ${err.message}`);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
        console.log(`PORT from .env: ${process.env.PORT}`);
    }
});
