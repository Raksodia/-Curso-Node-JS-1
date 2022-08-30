const curso = require("./curso.json");
console.log(curso);
console.log(typeof curso);
console.log(curso.temas);


let infoCursoJSON = JSON.stringify(curso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

let cursoParse = JSON.parse(infoCursoJSON);
console.log(cursoParse);
console.log(typeof cursoParse);