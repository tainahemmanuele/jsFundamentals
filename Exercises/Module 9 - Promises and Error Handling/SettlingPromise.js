//Exemplo 1
let promise = new Promise (
    function (resolve,reject){
        setTimeout(resolve,100, 'someValue');
    }
);
promise.then(
    value => console.log('fulfilled: '+value),
    error => console.log('rejected: '+ error)
);