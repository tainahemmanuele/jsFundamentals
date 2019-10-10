//Exemplo 1
let car = {id: 5000, style:'convertible'};
let {id,style} = car;

console.log(id,style);

//Exemplo 2
let car = {id: 5000, style:'convertible'};
let id,style;
({id,style} = car);

console.log(id,style);

//Exemplo 3