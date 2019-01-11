const express = require('express');
const path = require('path');
const fs = require('fs');
const { API_HOST, PORT } = require('./config');
const app = express();

app.set('views', path.join(__dirname, '../dist'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
    fs.readFile(path.join(__dirname, '../dist/index.html'), 'utf-8', (err, content) => {
        if (err) {
            console.log('error with read index.html')
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(content)
    })
});

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});