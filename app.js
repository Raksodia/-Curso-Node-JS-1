//require
/*
const saludos = require("./saludos.js");
console.log(saludos.saludar("Bienvenido"));
console.log(saludos.saludarHolaMundo());
*/

//desestructuracion
const { saludar , saludarHolaMundo } = require("./saludos.js");
console.log(saludar("Bienvenido"));
console.log(saludarHolaMundo());
