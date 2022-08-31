const EventEmitter = require('events');
const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total,numProductos) => {
    console.log(`Total de la Compra: $${total}`);
    console.log(`Numero de Productos: ${numProductos}`);
});

emisorProductos.emit('compra',500,5);

