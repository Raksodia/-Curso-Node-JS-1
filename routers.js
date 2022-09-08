const express = require('express');
const app = express();

const {infoCursos} = require('./express-json.js');

//routers 
const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas',routerMatematicas);

//routing
app.get('/', (req,res) => {
    res.send('Mi servidor con Express');
});

app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos));
});

//router
routerProgramacion.get('/', (req,res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/programacion/:lenguaje', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

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

routerMatematicas.get('/', (req,res) => {
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