//Exemplo 1
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
    }
};
xhttp.open("GET","http://myid.mockapi.io/api/v1/users", true);
xhttp.send();

//Exemplo 2
import $ from 'jquery';

let promise = $.get("http://myid.mockapi.io/api/v1/users");
promise.then(
    data => console.log('sucess: ', data),
    error => console.log('error: ', error)
);