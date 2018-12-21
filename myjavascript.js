var person = {
    nume: 'Sergionx' ,
    prenume: 'Mihail' ,
    varsta: 23,
    sex: 'M' ,
    pasiuni : [
  'hokey', 'fotbal', 'citit', 'scris'
    ],
    address:{
        strada: 21 + 'decembrie' + 1989,
        number: 17,
        bloc: 'C17'
    }
};
alert(`Am o persoana cu proprietatile ${person.pasiuni[0]}`);
console.log(person);