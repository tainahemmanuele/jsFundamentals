// Exemplo 1 - call
let o = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};

let newCar = { carId: 456};

console.log( o.getId.call(newCar));

//Exemplo 2 - apply (igual a call, porém pode passar argumentos - matriz de argumentos)
let o = {
    carId: 123,
    getId: function(prefix){
        return prefix + this.carId;
    }
};

let newCar = {carId: 456};

console.log (o.getId.apply(newCar,['ID: ']));