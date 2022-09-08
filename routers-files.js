const express = require('express');
const app = express();

const {infoCursos} = require('./express-json.js');

const routerMatematicas = require('./routers/router-file2.js');
app.use('/api/cursos/matematicas',routerMatematicas);

const routerProgramacion = require('./routers/router-file1.js');
app.use('/api/cursos/programacion', routerProgramacion);

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});