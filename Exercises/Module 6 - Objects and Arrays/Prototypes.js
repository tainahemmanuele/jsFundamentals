// Exemplo 1
function Car(id){
    this.carId = id;
}

Car.prototype.start = function(){
    console.log('start: '+ this.carID);
};

let car = new Car(123);
car.start();