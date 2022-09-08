//routers 
const express = require('express');
const {programacion} = require('../datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();

routerProgramacion.get('/', (req,res) => {
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.language === lenguaje);
    
    console.log(lenguaje);
    
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    
    if(req.query.ordenar === 'vistas'){
        //res.send(JSON.stringify(resultados.sort( (a, b)=> a.vistas - b.vistas)));//ascendente
        res.send(JSON.stringify(resultados.sort( (a, b)=> b.vistas - a.vistas)));//descendente
    }

    res.send(JSON.stringify(resultados));
});

routerProgramacion.get('/:lenguaje/:nivel', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.language === lenguaje && curso.nivel === nivel);
    console.log(lenguaje);
    console.log(nivel);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    else
        res.send(JSON.stringify(resultados));
});

module.exports = routerProgramacion;