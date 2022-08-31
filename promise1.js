const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
}

/*
//probar aleatoriedad de funcion estatusPedido
for(let i=0;i<10;i++){
    console.log(estatusPedido());
}
*/

const miPedidoPizza = new Promise((resolve,reject)=> {
    //simulacion de respuesta en 3 segundos
    setTimeout(()=> {
        if(estatusPedido()){
            resolve("Pedido Exitoso");
        }
        else{
            reject("Pedido No Exitoso");
        }
    },3000);
});

/*
//opcion 1
const manejarPedido = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
};

const rechazarPedido = (mensajeRechazo) => {
    console.log(mensajeRechazo);
};

miPedidoPizza.then(manejarPedido,rechazarPedido);
*/

/*
//opcion 2
miPedidoPizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .then(null,(mensajeRechazo) => {
        console.log(mensajeRechazo);
    });
*/

/*
//opcion 3
miPedidoPizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .catch((mensajeRechazo) => {
        console.log(mensajeRechazo);
    });
*/


//opcion 4
const manejarPedido = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
};

const rechazarPedido = (mensajeRechazo) => {
    console.log(mensajeRechazo);
};

miPedidoPizza.then(manejarPedido).catch(rechazarPedido);
