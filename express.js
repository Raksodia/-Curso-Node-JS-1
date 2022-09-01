const express = require('express');
const app = express();

const {infoCursos} = require('./express-json.js');

app.get('/', (req,res) => {
    res.send('Mi servidor con Express');
});

app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req,res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/matematicas', (req,res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});