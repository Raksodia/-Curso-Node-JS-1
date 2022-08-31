function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando: ${producto}`);
        setTimeout(()=>{
            if(producto === 'taza'){
                resolve('Ordenando Taza');
            }
            else {
                reject('Producto No Disponible');
            }
        },2000);
    });
}

function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log('Procesando Pedido');
        console.log(`La Respuesta fue ${respuesta}`);
        setTimeout(()=>{
            resolve("Gracias por tu Compra");
        },4000);
    });
}

ordenarProducto('taza')
    .then(respuesta => {
        console.log("Respuesta Recibida");
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    });