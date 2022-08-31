const http = require('http');

const servidor = http.createServer( (req,res) => {
   console.log('Solicitud Nueva.');
   console.log(req.url);
   console.log(req.method);
   console.log(req.headers);
   console.log(res.statusCode);
   
   res.end('Hola Mundo'); 
});

const puerto = 3000;

servidor.listen(puerto, () =>  {
        console.log(`El Servidor esta Escuchando en >> http://localhost:${puerto}`);
    });