// Exemplo 1
let fn = function(){
    console.log (this === window);
};

fn();

// Exemplo 2
let o = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};

console.log(o.getId());