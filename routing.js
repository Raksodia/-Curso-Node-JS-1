const http = require('http');
const {infoCursos} = require('./cursos');

console.log(infoCursos);

const servidor = http.createServer( (req,res) => {
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            console.log(`El metodo usado no puede ser manejado ${method}`);
            break;
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
        //res.writeHead(200, {'Content-type':'application/json'});
        res.end('Bienvenidos a Primer Servidor con Routing');
    }
    else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(infoCursos));
    }
    else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        res.end(JSON.stringify(infoCursos.programacion));
    }

    res.statusCode = 404;
    return res.end('El recurso solicitado no existe...');
}

function manejarSolicitudPOST(req,res){
    const path = req.url;
    
    if(path === '/cursos/programacion'){
        let cuerpo = '';
        req.on('data',contenido => {
            cuerpo+= contenido.toString();
        });

        req.on('end',() => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo.titulo);
            res.end('El servidor recibio una solicitud POST');
        });
    }
}