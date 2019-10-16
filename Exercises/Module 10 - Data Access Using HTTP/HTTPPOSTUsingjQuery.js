//Exemplo 1
import $ from 'jquery';
let user ={
    name: 'Mark Zamoyta',
    avatar: 'mark.jpg'
};
let promise = $.post(
    "http://myid.mockapi.io/api/v1/users", user
);
promise.then(
    data => console.log('data: ', data),
    error => console.log('error: ', error)
);
