async function asyncFunc () {
   console.log("async function 1");
   await Promise.resolve();
   console.log("async function 2");
}
function myFunction () {
   console.log(1);
   asyncFunc();
   console.log(2);
}

myFunction();