//Exemplo 1 - Error - Fora do escopo da função a chamada de variável
function startCar(carId){
    let message = 'Starting...';
}

startCar(123);
console.log(message);

//Exemplo 2
function startCar(carId){
    let message = 'Starting...';
    let startFn = function turnKey(){
        console.log(message);
    };
    startFn();
}

startCar(123);

//Exemplo 3 - Variavel não é atualizada
function startCar(carId){
    let message = 'Starting...';
    let startFn = function turnKey(){
       let message = 'Override';
    };
    startFn();
    console.log(message);
}

startCar(123);