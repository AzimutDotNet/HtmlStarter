function exercisejavascript() {
    var initialnumber = 0;
    var myString = "";
    var myArray = [];

  do{
      initialnumber++;
      myArray.push(initialnumber);
  }
  while (initialnumber <=10);
return myString + myArray;
}
console.log(exercisejavascript());