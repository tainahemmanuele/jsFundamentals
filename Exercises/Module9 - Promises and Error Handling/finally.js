//Exemplo 1
try{
    let car = newCar;
}catch(error){
    console.log('error: ',error);
}finally{
    console.log('this always executes');
}

//Exemplo 2
try{
    let car = null;
}catch(error){
    console.log('error: ',error);
}finally{
    console.log('this always executes');
}