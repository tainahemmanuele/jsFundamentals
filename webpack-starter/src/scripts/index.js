let carIds = [
    { carId: 123, style: 'sedan'},
    { carId: 456, style: 'convertible'},
    { carId: 789, style: 'sedan'}
];
let result = carIds.find(
    car => car.carId > 500
);

console.log(result);