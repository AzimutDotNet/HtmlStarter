function exersiseJavascript() {
    var initialnumber = 0;
    var myString = "";
    var myarray = [];
  do {
      initialnumber++;
      myarray.push(initialnumber);
  }
  while (initialnumber == 0);
    return myString + myarray;
}
console.log(exersiseJavascript());