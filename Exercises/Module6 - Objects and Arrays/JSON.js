//Exemplo 1
let car = {
    id: 123,
    style: 'convertible'
};

console.log(JSON.stringify(car));

//Exemplo 2
let carIds = [
    { carId: 123},
    { carId: 456 },
    { carId: 789}
];

console.log( JSON.stringify(carIds));

//Exemplo 3
let jsonIn =
`[
    { "carId": 123},
    { "carId": 456 },
    { "carId": 789}
]
`;

let carIds = JSON.parse(jsonIn);
console.log( carIds);