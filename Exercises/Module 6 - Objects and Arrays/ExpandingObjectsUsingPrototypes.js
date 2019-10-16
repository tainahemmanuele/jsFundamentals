//Exemplo 1
String.prototype.hello = function(){
    return this.toString() + ' Hello';
};

console.log('foo'.hello());