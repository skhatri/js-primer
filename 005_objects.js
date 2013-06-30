//convention when u are creating
//a class use Capitalize

function Student(name) {
    //we are ensuring that Student is called properly
    //here we are checking if they called with new
    //if called with new, this is a Student instance.
    //if not we call new Student ourselves properly
    //and then return that student back to whoever
    //called us asif this function was just a general function
    //and not constructor function
    if (!(this instanceof Student)) {
        console.log("Not called nicely. But I am going to fix it.");
        return new Student(name);
    }
    this.name = name;
}
//constructor function can add new methods like getName()
//using the prototype.
//every object inherits from Object
//Object.prototype is the base prototype
//prototype is a special property that provides the link to create
//properties and methods for the Constructor Function

Student.prototype.getName = function () {
    return this.name;
};


//this is a function but used as constructor
//we need use "new" to create the instance of student
//v and s are objects
//Student is a constructor function
//we are creating those v and s objects using constructor function
//these two lines are examples of constructor function invocation
var v = new Student("V");
var s = new Student("S");

//these are examples of method invocation, meaning
//functions which are attached to the objects as properties
console.log(v.getName());
console.log(s.getName());

function printHello(msg) {
    console.log("hello " + msg);
}

//function call
//prints undefined as nothing is passed
printHello();

//will print hello test
printHello("test");

//2, 4
function MathStudent(name, unitOfWork) {
    this.name = name;
    this.unitOfWork = unitOfWork;
}

//we are linking math students prototype to Student
//so there is inheritence established now
MathStudent.prototype = Object.create(Student.prototype);

MathStudent.prototype.getUnitOfWork = function () {
    return this.unitOfWork;
}

MathStudent.prototype.setUnitOfWork = function (work) {
    this.unitOfWork = work;
};


//this student has no unit of work so it will have undefined printout
var mathGuy = new MathStudent("Suresh");
console.log(mathGuy.getName());
//should be undefined
console.log(mathGuy.getUnitOfWork());
mathGuy.setUnitOfWork(2);
//now that setter has been called, it should be set to 2
console.log(mathGuy.getUnitOfWork());


var m2 = new MathStudent("Jack", 4);
console.log(m2.getName());
console.log(m2.getUnitOfWork());


//we have seen three ways of calling function so far
//now we are going to use prototype to call
//Object.prototype.call/apply can help us with that

console.log(mathGuy.getName());
//we are using the prototype chain to get function name and then calling that on mathGuy
//so the first argument is the object on which we want to call the function
//the function here is the one that is immediately written after prototype
console.log(MathStudent.prototype.getName.call(mathGuy));

//2, 4
function SpanishStudent(name) {
    this.name = name;
}

//we are linking math students prototype to Student
//so there is inheritence established now
SpanishStudent.prototype = Object.create(Student.prototype);

SpanishStudent.prototype.getName = function () {
    return "Hola!!! " + this.name;
};

var spanishGuy = new SpanishStudent("Kaka");
console.log(spanishGuy.getName());
//here we are explicitly calling getName from SpanishStudent
console.log(SpanishStudent.prototype.getName.call(spanishGuy));
//but here no matter what the other student implementation do
//we are ensuring our getName value will always be the one
//returned by Student.getName
console.log(Student.prototype.getName.call(spanishGuy));


a = [1, 43, 5];

//i have two objects here a and mathGuy
//lets find the type of a and mathGuy
console.log("a type is " + (typeof a));
console.log("mathGuy type is " + (typeof mathGuy));

console.log(a.toString());
//here Object toString() is being called because the student at this point does not have toString
//because it didnt find toString() inside MathStudent or Student
//it is delegating the call to Object. Object always has at least toString()
//and that was called here.
console.log(mathGuy.toString());


Student.prototype.toString = function () {
    return "Name: " + this.name;
}
//this time it tried to traverse the prototype chain looking for toString()
//it didnt find in MathStudent.
//so it went one level up and tried in Student. It did find it there
//and whatever student was returning to us, is printed
console.log(mathGuy.toString());

//this is the way to check whether a given object is Array by comparing toString() return
//from object prototype to [object Array]
console.log(Object.prototype.toString.call(a));
//now that we are calling toString on Object prototype, this will not print the Name: Suresh format
//that it did above.
console.log(Object.prototype.toString.call(mathGuy));


//again there is no toString() in SpanishStudent, so it will call Student toString
console.log(spanishGuy.toString());
SpanishStudent.prototype.toString = function () {
    return "Hola's Name: " + this.name;
}
//but then now SpanishStudent has their own toString() it should print the one with Hola
console.log(spanishGuy.toString());


//Few Gotchas
//there is no new
var abc = Student("ABC");
console.log(abc.getName());


function Car(name) {
    this.carName = name;
}
//didnt call with new
//so the name is attached as property of "this" the global object.
var cc = Car("BMW");
//this carName has escaped the car scope because Car was called as function not constructor
console.log(carName);

//global attributes can be deleted
delete carName;

console.log(typeof carName);

var c = 1;
//var cant be deleted
delete c;

console.log(typeof c);


//checking attributes
console.log("toString" in mathGuy);

//using the "prop" in object notation you can iterate over all attributes and functions
for (x in mathGuy) {
    console.log(x + " " + " " + (typeof mathGuy[x]));
}

console.log("Math's own property ");
//fake hasOwnproperty returning true always
//this is the reason mathGuy.hasOwnProperty wont always work
MathStudent.prototype.hasOwnProperty = function() {
    return true;
};

console.log("Math's property using has Own property check");
for (var x in mathGuy) {
    //mathGuy.hasOwnProperty(x) would work too but it is not safe incase you have a hasOwnProperty override function
    if(mathGuy.hasOwnProperty(x)) {
        console.log(x + " " + " " + (typeof mathGuy[x]));
    }
    if (Object.prototype.hasOwnProperty.call(mathGuy, x)) {
        console.log("real " + x + " " + " " + (typeof mathGuy[x]));
    }
}