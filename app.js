// Number Type conversion //
/*
1.Math.round();
2.Math.floor();
3.Math.ceil();
4.toFixed();
5.parseFloat();
6.parseInt();
7.Number()
*/
// Math.round(); float/double to integer
// structure: Math.round(float number); return integer number
let a = 354.574;
let aa = -354.574;
let b = Math.round(a);
let bb = Math.round(aa);
console.log("354.574 to 355 convert: "+"positive "+ b+" Negative: "+ bb);
let c = Math.floor(a);
let cc = Math.floor(aa);
console.log("354.574 to 354 /355 convert: "+"Positive "+ c +" Negative: "+ cc);
let d = Math.ceil(a);
let dd = Math.ceil(aa);
console.log("354.574 to 355/354 convert: "+"Positive: "+d +" Negative: "+ dd);
//number show after ending of point toFixed()
//structure: target float number.toFixed(to show number)
let e = 543.57;
let ee = e.toFixed();
console.log("to show number 543.57 to 544: "+ee);
let eee = e.toFixed(1);
console.log("to show 1 digit after point 543.5:"+ eee);
let eeEe = e.toFixed(4);
console.log("to show 4 digit after point 543.5:"+ eeEe);
//string to Number
//parseFloat(), parseInt(),Number()
let x = "123Hello";
let y = "123.56";
let xx =parseFloat(x);
console.log(xx);
let yy = parseInt(x)
console.log(yy);
let zz = Number(y)
console.log(zz);

//string
let myString = "Laptop";
let stringUppercase = myString.toUpperCase();
console.log("stringUppercase "+stringUppercase);
let stringLowercase = myString.toLowerCase();
console.log("stringLowercase" + stringLowercase);
let stringIndexOf = myString.indexOf("p");
console.log("stringIndexOf"+stringIndexOf);
let stringIncludes = myString.includes("p");
console.log("stringIncludes"+stringIncludes);
let stringMatch =myString.match("p");
console.log("stringMatch"+stringMatch);
let stringSearch = myString.search("p");
console.log("stringSearch"+stringSearch);
let stringReplace =myString.replace("p","q");
console.log("stringReplace"+stringReplace)
let stringStart = myString.startsWith("L");
console.log("stringStart"+stringStart);
let stringEnd =myString.endsWith("p");
console.log("stringEnd"+stringEnd);
console.log("string to array");
let arr = myString.split(" ");
console.log("arr "+arr)
let mystring2 ="Hello Bangladesh whats up";
let arr2 = mystring2.split(" ");
console.log("arr2"+arr2);
let stringSlice =myString.slice(1,5);
console.log("stringSlice"+stringSlice);
let stringPad =myString.padStart(8,"HP");
console.log("stringPad"+stringPad)
let stringPadend =myString.padEnd(8,"HP");
console.log("stringPadend"+stringPadend)
let stringConcate =myString.concat(" in Bangladesh");
console.log("stringConcate"+stringConcate)


