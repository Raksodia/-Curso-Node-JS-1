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
        },1000);
    });
}

async function realizarPedido(producto){
    try
    {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta Recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }
    catch(error){
        console.log(error);
    }
}

realizarPedido('taza');