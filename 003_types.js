//Types and conversions
var x = 10;

var s = x + "";
console.log(s);

console.log(typeof x);
console.log(typeof s);

var x = 3;
var y = 5;
var z = "";

var result = x + y;

function print(expr) {
    console.log('val ' + expr + ' and type is ' + (typeof expr));
}


print(x + y);
//x and y are added first so the result is a number but when z is concatenated
//the result is a string
print(x + y + z);
//concatenates x and z together and is a string,
//adding y to it is performing another concatenation to create a string result
print(x + z + y);


var v;
//typeof v is undefined but the word undefined is a description
//so its type is string
console.log(typeof (typeof v));

console.log(typeof (typeof 10));
console.log(typeof '10');

//Conversions
var w = 100;
console.log(String(w));
console.log(typeof String(w));

console.log(Number(w));
console.log(typeof Number(w));

console.log(Boolean(w));
console.log(typeof Boolean(w));

w = 0
//w is 0 so this is falsy and it will be false
//but the type is boolean
console.log(Boolean(w));
console.log(typeof Boolean(w));
//!! converts any expr to boolean so the value below
//will be false as w is 0 and typeof will be boolean
console.log(!!w);
console.log(typeof !!w);

//!! is a shorthand for Boolean()


var b = parseInt("xxyy");
console.log(b);
console.log(typeof b);


//always use !== or === for != or ==
// != not equal coerce

var num2IsEqualToStr2 = (2 == "2");
//its true because of type coercion
console.log(num2IsEqualToStr2);

//this will be false because it is doing exact match for type as well.
console.log(2 === "2");

console.log(2 != 2);    //false
console.log(2 != "2"); //false
console.log(2 !== "2"); //true

//falsy values are unpredictable if not using !== or ===

console.log(NaN == NaN);
console.log(NaN === NaN);

//but type of NaN is number
console.log(typeof NaN);

console.log(0 == ""); //true because both are falsy and there is type conversion
console.log(0 === "");//false because there is no conversion

