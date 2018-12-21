var person = {
    nume: 'Sergiu',
    prenume: 'Mihail',
    varsta: 23,
    sex: 'M',
    pasiuni: [
    'hockey', 'fotbal', 'citit', 'scris'
    ],
    address:{
        strada: 21 + 'decembrie',
        number: 17,
        bloc: "c17"
    }
};

alert(`Am o persoana cu proprietatile ${person.pasiuni[0]}`);
console.log(person);