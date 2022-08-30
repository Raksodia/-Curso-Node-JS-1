function mostrarTema(tema){
    console.log(`Estoy Aprendiendo ${tema}`);
}
//setTimeout(mostrarTema,5000,'Node.js');

function sumar(a,b){
    console.log(a+b);
} 
//setTimeout(sumar,2000,5,6);

//console.log('antes de setImmediate');
//setImmediate(mostrarTema,'Node.js');
//console.log('despues de setImmediate');

setInterval(mostrarTema,2000,'PHP');
setInterval(sumar,2000,3,4);