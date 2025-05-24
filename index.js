const express = require('express');
const app = express();
const path = require('path');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
})

const PORT = process.env.PORT || 8080; // just as best practice

app.listen(PORT, ()=> {
    console.log('server has started')
});