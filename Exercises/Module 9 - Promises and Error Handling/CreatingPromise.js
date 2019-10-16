//Exemplo 1
let promise = new Promise (
    function (resolve,reject){
        setTimeout(resolve,100, 'someValue');
    }
);

console.log(promise);