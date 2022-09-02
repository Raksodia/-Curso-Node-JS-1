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

app.get('/api/cursos/programacion/:lenguaje', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    console.log(lenguaje);
    
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    else
        res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    console.log(lenguaje);
    console.log(nivel);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    else
        res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/matematicas', (req,res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

app.get('/api/cursos/matematicas/:tema', (req,res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    console.log(tema);
    
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    else
        res.send(JSON.stringify(resultados));
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});