//hoisting

//arguments, this

//closure

//regexp

//apply method


//jshint

//jasmine test

//karma test runner

var obj = (function () {
    var x = 5;
    //at this point f is defined.
    //at this point, the variables and functions and objects
    //within the same scope are accessible to f.
    //meaning x is always available to f.
    //that also means x is private.
    //no one from outside this function which is immediate function
    //will ever have access to x.

    //when you create the function f, you create a "closure" around the scope it has access to
    //the closure is private to the function you created.
    var f = function () {
        console.log(x++);
    };
    console.log(typeof f);
    return f;
}());

obj();  //prints 5
obj();  //6
obj();  //7
console.log(typeof x);

var southAsian = (function () {

    var cache = [];

    var finder = function (country) {
        if (cache[country] === true || cache[country] === false) {
            return cache[country];
        }
        console.log("Country does not exist in cache, doing a really big lookup");

        var countries = ["India", "Nepal", "Maldives"];
        for (var i = 0; i < countries.length; i++) {
            if (country === countries[i]) {
                cache[country] = true;
                return true;
            }
        }
        cache[country] = false;
        return false;

    };
    return finder;
}());


console.log(southAsian("Nepal"));
console.log(southAsian("Nepal"));
console.log(southAsian("India"));
console.log(southAsian("Australia"));

console.log(southAsian("India"));
console.log(southAsian("India"));
console.log(southAsian("India"));

console.log(southAsian("India"));
console.log(southAsian("India"));
console.log(southAsian("India"));

console.log(southAsian("Australia"));

console.log(southAsian("Australia"));
console.log(southAsian("Australia"));
console.log(southAsian("Australia"));
console.log(southAsian("Australia"));
console.log(southAsian("Australia"));
console.log(southAsian("Australia"));
console.log(southAsian("Australia"));

var isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
}
//arguments are array like objects. they can be converted to array
//by using slice call for example
var v = function() {
    //prints [object Arguments]
    console.log(Object.prototype.toString.call(arguments));
    //returns array now so prototype toString on Object or our method isArray
    //above will return true on the return value of this function
    return Array.prototype.slice.call(arguments);
};

var x = v(1,2,3);
console.log(isArray(x));
