
const promesaCumplida = true;
const miPromesa = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        if(promesaCumplida){
            resolve('Promesa Cumplida');
        }
        else{
            reject('Promesa Incumplida');
        }
    },3000);
});

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejarPromesaIncumplida = (valor) => {
    console.log(valor);
};

miPromesa.then(manejarPromesaCumplida,manejarPromesaIncumplida);
