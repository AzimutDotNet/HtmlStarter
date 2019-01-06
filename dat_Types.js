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

let myObjectNotLiterals = new Object();

myObjectNotLiterals = myObject;

myObject = null;

console.log(myObject.isValidUser());
