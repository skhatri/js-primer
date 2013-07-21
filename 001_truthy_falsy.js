

//there are 6 values in javascript which always evaluate to false

var cond = 1;
var c2;

if (cond) {
    console.log('ok');
} else {
    console.log('not ok');
}

//undefined
var x;
//isFalsy - undefined, 0, null, "",  false, NaN
//isTruthy
console.log(Boolean(undefined));
console.log(!!undefined);
//to convert from object or any value to Boolean equiv - you can use
//Boolean(val)  or !!val

var myFalseValues = [undefined, 0, null, "", false, NaN];


for (var i = 0, max = myFalseValues.length; i < max; i += 1) {
    console.log(!!myFalseValues[i]);
}
