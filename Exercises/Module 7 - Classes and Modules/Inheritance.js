//Exemplo 1
class Vehicle{
    constructor(){
        this.type = 'car';
    }
    start(){
        return `Starting: ${this.type}`;
    }
}

class Car extends Vehicle{
    start(){
        return 'in Car start';
    }

}
let car = new Car();
console.log(car.start());

//Exemplo 2
class Vehicle{
    constructor(){
        this.type = 'car';
    }
    start(){
        return `Starting: ${this.type}`;
    }
}

class Car extends Vehicle{
    start(){
        return 'in Car start ' + super.start();
    }

}
let car = new Car();
console.log(car.start());