// Exemplo 1
function Car(id){
    this.carID = id;
}

let car = new Car(123);
console.log(car.carID);

//Exemplo 2 - Metodos
function Car(id){
    this.carID = id;
    this.start = function(){
        console.log('start: '+ this.carID);
    };
}

let car = new Car(123);
car.start();