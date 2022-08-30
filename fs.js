const fs = require('fs');

//read file
/*
fs.readFile('fs.html','utf-8',(err,contenido) => {
    if(err){
        //console.log(err);
        throw err;
    } else {
        console.log(contenido);
    }
});
*/

//rename file
/*
fs.rename('fs.html','fs1.html', (err) => {
    if(err){
        throw err;
    }
    console.log("Nombre cambiado exitosamente");
});
*/

//add content at enf of file
/*
fs.appendFile("fs.html",'<p>contenido adicional</p>', (err) => {
    if(err){
        throw err;
    }
    console.log("Contenido agregado exitosamente");
})
*/

//replace the content of the file
/*
fs.writeFile("fs.html", "Contenido Nuevo", (err) => {
    if(err){
        throw err;
    }
    console.log("Contenido reemplazado exitosamente");
});
*/


//remove the file
fs.unlink("fs.html", (err) => {
    if(err){
        throw err;
    }
    console.log("Archivo eliminado exitosamente");
});


//fs.readFileSync
//fs.renameSync
//fs.appendFileSync
//fs.writeFileSync
//fs.unlinkSync



