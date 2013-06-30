//Number conversions
var result;

var r = Math.random();


console.log(r * 100);
result = parseInt(r * 100, 16);


//hexadecimal 10.
console.log(0x10);

console.log("parsed " + parseInt("09", 8));

var x = 15;

console.log("in hex " + x.toString(16));
console.log("in dec " + x.toString(10));
console.log("in oct " + x.toString(8));
console.log("in oct " + x.toString(2));


console.log(result);

var v = "103939.99263354";
console.log(parseInt(v));
console.log("in float " + parseFloat(v));
//tofixed is to specify the number of decimal points after the number.
console.log(parseFloat(v).toFixed(3));

