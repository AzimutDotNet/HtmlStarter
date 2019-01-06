'use strict';
let user = {
  name: "John",
  hi() { console.log(user.name); },
  bye() { console.log("Bye"); }
};
var myObject = {
    id: 1,
    name: 'Daniel',
    prenume: 'Cristian',
    numeComplet: 'Porumb Daniel Cristian',
    isUser: true,
    isValidUser(){
        if(this.name == 'Daniel')
        return true;
    }    
};

let stringUser = user + myObject;

console.log(stringUser.toString());