function romanize(number) {
  var matches = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for (i in matches) {
    while (number >= matches[i]) {
      roman += i;
      number -= matches[i];
    }
  }
  return roman;
}
console.log(romanize(9));

//##Roman Numeral Converter

// -Create a function *romanize* that takes a number as an input and converts that number into a roman numeral.
// ``` romanize(946) => CMXLIII;
//   romanize(55) => LV;
//   romanize(46) => XLVI```

// -[Here is a helpful chart](http://literacy.kent.edu/Minigrants/Cinci/romanchart.htm)
// - **Dont forget that M = 1000 and D = 500**
