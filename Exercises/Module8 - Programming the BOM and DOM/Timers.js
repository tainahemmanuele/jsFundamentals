//Exemplo 1
let timeoutId = setTimeout ( function (){
    console.log('1 second passed');
}, 1000);

clearTimeout(timeoutId);

//Exemplo 2
let intervalId = setInterval( function(){
    console.log('1 second passed');
}, 1000);

clearInterval(intervalId);