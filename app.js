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

//Modulo Built In - Console
console.warn("Warn Ocurrio un Error");
console.error("Error Ocurrio un Error");
console.error(new Error("Ocurrio un Error"));
