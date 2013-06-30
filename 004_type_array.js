//Arrays:
//array

var students = new Array();

students[0] = "Suresh";
students[1] = "Deep";
//i am missing index 2 and 3, so the array has empty values there
students[4] = "Deep";
//this is undefined as we have skipped the values
console.log("student 2 is " + students[2]);

function print(arr) {
    console.log("The length of array " + arr.length);
    console.log(arr);
}

print(students);
//removed the student at index 1
delete students[1];
print(students);

var display = students.join(" and ");
console.log(display);

var popp = students.pop();
console.log("popped " + popp);
print(students);

students.pop();
students.pop();
print(students);

students.push("Johnny");
print(students);

//array typeof is object as well
console.log("Is array " + (typeof students));
//just like Objects type is object
console.log(typeof new Object());

//where it differs is Array will have Array in toString()
//when called using Object.prototype
console.log(Object.prototype.toString.call(students));
console.log(Object.prototype.toString.call(new Object()));

//before and after sorting
print(students);
students.sort();
print(students);

var a = [1, 2, 45, 32, 4, 2323, undefined];

//we are creating new array b out of a.
//
var b = a.slice();
console.log("B");
b.sort();
print(b);

//if b is sorted, a is independent so it is not sorted
print(a);
a.push("A");
print(a);
//i am adding another type of array value
//and asking JS to sort for me
var c = a.slice();
c.sort();
console.log(c);


//here we are providing our own sorting function
//by using sorting fn we can dictate the sorting order
//for special values as well.
a = [2, 5, 6, 7, 2323, 10];
var sortingStrategyFn = function (num1, num2) {
    return num1 < num2;
};

a.sort(sortingStrategyFn);
print(a);
//reverse is to reverse array.
console.log([1, 2, 7, 3].sort().reverse());

console.log("The a is ");
print(a);

//splice
//delete from index 2 onwards, the next 2 numbers
//the deleted array is returned by splice,
//we are assigning that deleted array into e
var e = a.splice(2, 2);
console.log('A is ');
print(a);
console.log('Spliced Array ');
print(e);

console.log("A after splice is ");
print(a);

//remove one item starting at index 1
a.splice(1, 1);
print(a);

//remove the first item and replace it with number 6
//first argument is the index to start deleting at
//second argument is numberof items to delete
//other arguments are items to be added at delete position
//after the delete is completed.
a.splice(0, 1, 6, 16);
print(a);


print(students);
students.push('Cory');
print(students);
//there is a undefined value at index 2
students.splice(2, 1);
print(students);

//printing array using forloop

for (var i = 0; i < students.length; i += 1) {
    console.log(students[i]);
}

//this is just an example
//never add properties to Array
//there are other ways to achieve same things

//never use x in obj format to iterate through array
students.school = 'UTS';
for (i in students) {
    console.log(i);
}
print(students);


//Functions:
//Functions:

//expressions

a = [1, 32, 3];
//this function is called function expression
//especially it is called anonymous function expression
//because it does not have a name associated with it.
a.sort(function () {
    return true;
});

//function definition
function printHello() {
    console.log("Hello World");
}

//named function expression
var xyz = function () {
    return true;
}
a.sort(xyz);


var xyz2 = function sorter() {
    return true;
};

console.log("xyz name is : " + xyz.name);

console.log("xyz2 name is : " + xyz2.name);
console.log("printHello function name is " + printHello.name);


a.forEach(function (item) {
    console.log(item);
});


var printIt = function (item) {
    console.log(item);
};

a.forEach(printIt);

