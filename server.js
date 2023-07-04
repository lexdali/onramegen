const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/261785934', (req, res) => {
    fs.readFile('messages.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server Error reading data file.");
            return;
        } 

        const jsonData = JSON.parse(data);

        res.json(jsonData);
    })
})

app.listen(port, () => { console.log(`Running on port number ${port}.`) });