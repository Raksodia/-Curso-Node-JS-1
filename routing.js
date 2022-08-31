const http = require('http');
const cursos = require('./cursos');

console.log(cursos);

const servidor = http.createServer( (req,res) => {
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
        default:
            console.log(`El metodo usado no puede ser manejado ${method}`);
    }
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}`);
});

function manejarSolicitudGET(req,res){
    const path = req.url;
    if(path === '/'){
        res.statusCode = 200;
        res.end('Bienvenidos a Primer Servidor con Routing');
    }
    else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    }
    else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

}