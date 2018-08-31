const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');


const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Alejandro 8a',
    });
});

app.get('/data', (req, res) => {

    res.send('Que pedo putito');
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});