// Exemplo 1

let getId = () => 123;

console.log(getId());

// Exemplo 2
let getId = prefix => prefix + 123;

console.log(getId('ID: '));

//Exemplo 3
let getId = (prefix, suffix) => prefix + 123 + suffix;

console.log( getId('ID: ', '!'));

//Exemplo 4
let getId = (prefix, suffix) => {
    return prefix + 123 + suffix;
}
console.log( getId('ID: ', '!'));