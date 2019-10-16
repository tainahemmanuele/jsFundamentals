//Exemplo 1
if (5 === 5 ||  6 ===6){
    console.log(true);
}
else {
    console.log(false);
}

//Exemplo 2
let userSettings = null;
let defaultSettings = {name: 'Default'};

console.log( userSettings || defaultSettings);

//Exemplo 3
let car = null;
if (!car){
    car ={};

}