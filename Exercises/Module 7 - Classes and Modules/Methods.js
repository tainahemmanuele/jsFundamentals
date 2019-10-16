//Exemplo 1
class Car{
    constructor(id){
        this.id = id;
    }
    identify(){
        return `Car Id: ${this.id}`;
    }

}

let car = new Car(123);
console.log(car.identify());

//Exemplo 2
class Car{
    constructor(id){
        this.id = id;
    }
    identify(suffix){
        return `Car Id: ${this.id} ${suffix}`;
    }

}

let car = new Car(123);
console.log(car.identify('!!!'));