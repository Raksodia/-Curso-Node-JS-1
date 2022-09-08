//routers 
const express = require('express');
const {matematicas} = require('../datos/cursos.js').infoCursos;
const routerMatematicas = express.Router();

routerMatematicas.get('/', (req,res) => {
    res.send(JSON.stringify(matematicas));
});

routerMatematicas.get('/:tema', (req,res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);
    console.log(tema);
    
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    else
        res.send(JSON.stringify(resultados));
});

module.exports = routerMatematicas;