//routers 
const express = require('express');
const {programacion} = require('../datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();
//POST PUT PATCH DELETE -- Middleware
routerProgramacion.use(express.json());

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

//POST PUT PATCH DELETE
routerProgramacion.post('',(req,res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
    
});

routerProgramacion.put('/:id', (req,res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);
    if(indice >= 0)
    {
        programacion[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(programacion));
});

routerProgramacion.patch('/:id', (req,res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);
    if(indice >= 0)
    {
        cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar,infoActualizada);
    }

    res.send(JSON.stringify(programacion));
});


routerProgramacion.delete('/:id', (req,res) => {
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);
    if(indice >= 0)
    {
       programacion.splice(indice,1);
    }

    res.send(JSON.stringify(programacion));
});


module.exports = routerProgramacion;