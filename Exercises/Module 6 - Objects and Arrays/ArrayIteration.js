//Exemplo 1
let carIds = [
    { carId: 123, style: 'sedan'},
    { carId: 456, style: 'convertible'},
    { carId: 789, style: 'sedan'}
];

carIds.forEach( car => console.log(car));

carIds.forEach( (car,index) => console.log( car, index));

//Exemplo 2
let carIds = [
    { carId: 123, style: 'sedan'},
    { carId: 456, style: 'convertible'},
    { carId: 789, style: 'sedan'}
];

let convertibles = carIds.filter(car => car.style === 'convertible');

console.log(convertibles);

//Exemplo 3
let carIds = [
    { carId: 123, style: 'sedan'},
    { carId: 456, style: 'convertible'},
    { carId: 789, style: 'sedan'}
];
let result = carIds.every(
    car => car.carId > 0 
);

console.log(result);

//Exemplo 4
let carIds = [
    { carId: 123, style: 'sedan'},
    { carId: 456, style: 'convertible'},
    { carId: 789, style: 'sedan'}
];
let result = carIds.find(
    car => car.carId > 500
);

console.log(result);