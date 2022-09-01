const http = require('http');

const servidor = http.createServer( (req,res) => { 
   res.end('Hola Mundo'); 
});

const puerto = 3000;

servidor.listen(puerto, () =>  {
        console.log(`El Servidor esta Escuchando en >> http://localhost:${puerto}`);
    });

//npm install -g nodemon
//nodemon nodemon.js
