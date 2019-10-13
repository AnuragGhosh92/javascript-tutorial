/* JQuery - library to manipulate the DOM elements. */
// $ or jQuery - name of the object.
var q = $("ul.people").addClass("newClass").removeClass("people");
console.log(q);


///* Strict Mode - JavaScript's strict mode, introduced in ECMAScript 5, is a way to opt in to a restricted variant of JavaScript*/
//"use strict";   // has to be at the top of the file for global usage.
////var asd;
////asf = {};   // throws error. a var must be defined.
////console.log(asf);
//
//function logNewFunction() {
//    "use strict";   // can also be defined inside functions, and works only for that function's execution context.
//    var asd1;
//    //asf1 = {};   // throws error. a var must be defined.
//    console.log(asf1);
//}
//
//logNewFunction();
//
///* Odds and Ends */
//var people = [
//    {
//        // the jon object
//        firstname: 'Jon',
//        lastname: 'Snow',
//        addresses: [
//            '111 Main Street',
//            '12 Third Avenue'
//        ]
//    },
//    {
//        // the ygritte object
//        firstname: 'Ygritte',
//        lastname: 'Snow',
//        addresses: [
//            '111 Main Street',
//            '12 Third Avenue'
//        ],
//        greet: function() {
//            return 'Hello!';
//        }
//    }
//]
//
//console.log(people);
//console.log(typeof people); // object
//
//var a = 3;
//console.log(typeof a); // number
//
//var b = '3';
//console.log(typeof b); // string
//
//var c = {};
//console.log(typeof c);  // object
//
//var d = [];
//console.log(typeof d);  // object
//console.log(Object.prototype.toString.call(d)); // [object Array]
//
//function Foo(name) {
//    this.name=name;
//}
//
//var e = new Foo('Eddard');
//console.log(typeof e);  // object
//console.log(e instanceof Foo);  //  true
//// instanceof checks down the prototype chain if this object has Foo as it's prototype has Foo in it.
//
//var z = function() {};
//console.log(typeof z);  // function



///* ES6 version of Javascript has a new way of creating objects - Classes 
//However, a class in Javascript, unlike other programming languages, IS ALSO AN OBJECT!
//
//Under the hood it's all the same, just a new syntactical way of creating objects.
//Classes in Javascript are just SYNTACTIC SUGAR!
//*/
//
//class Person {
//    
//    constructor(firstname, lastname) {
//        this.firstname = firstname;
//        this.lastname = lastname;
//    }
//    
//    greet() {
//        return 'Hi ' + firstname;
//    }
//}
//
//// Setting the prototype - is done via 'extends' keyword. extends sets the __proto__.
//
//class InformalPerson extends Person {
//    
//    constructor(firstname, lastname) {
//        super(firstname, lastname); // calls the constructor of the prototype object.
//    }
//    
//    greet() {
//        return 'Yo ' + firstname;
//    }
//}
//
//
///* Object.create and Pure Prototypal Inheritance */
//// The pure Javacript way of creating objects - using Prototypal Inheritance. Does not mimic other languages like the 'new' keyword and Function Constructors.
//
//// polyfill for Object.create
//if(!Object.create){
//    Object.create = function(o) {
//        if(arguments.length > 1){
//            throw new Error('Object.create implementation only accepts 1 parameter.')
//        }
//        function F() {};    // created an empty function constructor.
//        F.prototype = o;    // sets the prototype to the passed in object.
//        return new F();     // returns an empty object created by the function constructor which has it's prototype set to the new variable.
//    }
//}
//
//var person = {
//    firstname : 'Default',
//    lastname : 'Default',
//    greet : function() {
//        return 'Hi ' + this.firstname;
//    }
//}
//
//var jon = Object.create(person);    // pass the object to create the new object from. Built-in the JS engine.
//console.log(jon);       // an empty new object is created which has it's prototype set to person object.
//
//// So, Object.create creates an empty object with it's prototype set to whatever is passed in to the Object.create method.
//// Pattern used with this approach is to override the parent properties and methods or add new ones. - Pure Protoypal Inheritance.
//jon.firstname = 'John';
//jon.lastname = 'Snow';
//console.log(jon);
//
//// Object.create is supported in newer browsers. For older versions, we can use Polyfill : A code that adds a feature which the engine may lack. Polyfill code added above.



///* Building Objects - Other ways apart from Object Literal Syntax */
//
///* Function Constructors, 'new' and the History of Javascript */
//// Javascript was named so, to attract Java developers of that time to use this new language. They also added the 'new' keyword
//// to show that Javascript is similar to Java, though it isn't.
//
//// Function Constructor - A normal function like below that is used to construct an object. The 'this' variable points to a new 
//// empty object, and that object is returned from that function automatically.
//
////function Person() {
////    
////    console.log(this);      // prints an empty object, that was created by the 'new' keyword.
////    this.firstname = 'Jon';
////    this.lastname = 'Snow';
////    console.log('This is being invoked.');
////    //return { greeting : 'I got in the way' }; // greeting object is returned and hampers the JS engine's  usual flow. So return statement shouldn't be there
////}
////
////var jon = new Person();
////console.log(jon);
//
//// 'new' is actually an operator here, that takes in values as input.
//// when we say 'new', something special happens - 1. an empty object is created (eg, var a = {})
//// after that the Person() function is invoked. It's execution context is created.
//// 2. the 'this' variable points to the empty object created by new (special case when fn is invoked with new keyword(operator))
//// As long as the function used does not return a value, the Javascript engine will return the object that was created by the new operator.
//
//// function constructors are essentially functions, and take in parameters to take in the values to set to the new object/
//function Person2(firstname, lastname) {
//    this.firstname = firstname;
//    this.lastname = lastname;
//}
//
//var jon2 = new Person2('Jon', 'Snow');
//console.log(jon2);
//
//var jane = new Person2('Jane', 'Snow'); // creates a new object with the new values
//console.log(jane);
//
///* Function Construcors and Prototype */
//
//// All functions in JS have a prototype property, that is ONLY used when a function is used as a function constructor.
//// It holds the prototype object of all the objects CREATED by that function.
//// **It does NOT hold the prototype of the function object itself.
//// so jon2 above points to Person2.prototype as it's prototype. i.e. jon2.__proto__ == Person2.prototype
//// the prototype property starts out it's life as an empty object.
//
////console.log(jon2.getFullName()); throws exception as the getFullName() method is not yet put in the prototype object. The function does not exist yet.
//
//// This is a common practice to keep the properties on the object and the methods on the object's prototype because for multiple objects created by the function, the method takes up space only once. Memory optimization.
//Person2.prototype.getFullName = function() {
//    return this.firstname + ' ' + this.lastname;
//}
//
//var ned = new Person2('Ned', 'Stark'); // when the new keyword is called, it creates an empty object AND sets it's Prototype to the prototype property of the function it invokes, i.e. Person2.prototype.
//console.log(ned);
//console.log(ned.getFullName()); // works
//console.log(jon2.getFullName());    // works as jon2 already references the prototype, to which a new method is now added.
//
//// Since function constructors are just functions, they can be invoked directly as well, which is not it's intended way of use though. So, by convention a function that is intended to be used as a function constructor should have it's first letter capitalized. That way we know that it is a function constructor and is to be invoked with the new keyword.
//
///* Built-in function constructors */
//
//var a = new Number(3);  // created a new Number object and assigns to a
//
//console.log(a.toFixed(2));    //a is an object, not a primitive. It derives functions from it's prototype, defined at Number.prototype.
//
//console.log("John".length); // Javascript also does autoboxing in some cases, where it wraps up the primitive inside an object, in this case, the String object, giving it access to properties and methods.
//
//var date = new Date("3/1/2018");
//
//console.log(date);
//
///* Can also enhance the JS programming language by adding feature onto existing JS library. */
//
//String.prototype.isLengthGreaterThan = function(limit) {
//    return this.length > limit;
//}
//// by editing the prototype property of Function constructors.
//// Now, all Strings everywhere have access to above new method.
//
//console.log("John".isLengthGreaterThan(3));
//
//Number.prototype.isPositive = function() {
//    return this > 0;
//}
//
////console.log(3.isPositive()); // throws an error because Javascript does not autobox 3 to Number.
//
//var boxedNumber = new Number(3);
//
//console.log(boxedNumber.isPositive());  // Works. Prints true
//
///* NOTE : It's recommended to not use built-in function constructors like Number, Boolean and instead use the primitives.
//because in === comparisons,  a primitive and object will never be equal.
//*/
//
//var x = 3;
//var y = new Number(3);
//
//console.log(x == y);    // true
//console.log(x === y);   // false
//
///* NOTE : Do not use for..in with arrays to iterate over the elements. Here's why - */
//
//Array.prototype.myCustomFeature = "some cool feature!";
//
//var arr = ['Jon', 'Jane', 'Jim'];
//
///* Before adding the above feature to Array.prototype, Below code prints - 
//    0 : Jon
//    1 : Jane
//    2 : Jim
//    This shows that arr object has it's array elements as added properties to it's method. 
//*/
//
//for(var prop in arr){
//    console.log(prop + ' : ' + arr[prop]); 
//}
//
///* After adding feature to prototype above code prints - 
//0 : Jon
//1 : Jane
//2 : Jim
//myCustomFeature : some cool feature!
//
// So iterating over all properties are not safe in arrays because arrays are objects in Javascript.
//*/
//
//// So with arrays, always use standard for loop - 
//
//for(var i = 0; i < arr.length; i++) {
//    console.log(i + ' : ' + arr[i]);
//}
//
//// Instead of the Date built-in function, use Moment.js when dealing with dates.

///* Prototypal inheritance */
//
//var person = {
//    firstname : 'Default',
//    lastname : 'Default',
//    getFullName : function() {
//        return this.firstname + ' ' + this.lastname;
//    }
//}
//
//var jon = {
//    firstname : 'Jon',
//    lastname : 'Snow'
//}
//
//// Now we want Jon to extend person. 
//// CAUTION! - There are many ways to do it, but the one done below should NEVER be used.
//// don't do this EVER! for demo purposes only!! Apparently, causes performance problems
//jon.__proto__ = person; // this sets the prototype of the Jon object to the person object. Jon now inherits from person.
//
//console.log(jon);
//console.log(jon.getFullName()); // prints 'Jon Snow'
//// inside the function the 'this' variable points to the object that "originated" the call, i.e. jon, and so points to it.
//
//var jane = {
//    firstname : 'Jane'
//}
//
//jane.__proto__ = person;
//
//console.log(jane);
//console.log(jane.getFullName());
//
//// Everything in Javascript is an object, except primitives. Every object has a prototype, except the base object. 
//var a = {}; 
//console.log(a.__proto__); // all objects have prototype object as the base object.
//var b = function() { };
//console.log(b.__proto__);   // all functions derive from a built-in empty function object which has call, apply, bind methods among other properties and methods.
//var c = []; // all arrays derive a built-in empty array object that has the push, entries method among other properties and methods. 
//// the base object is just called the Object.
//
//// for.. in loops over every member of an object.
//for(var prop in jon) {  // by default iterates over all members of object and also it's prototype.
//    if(jon.hasOwnProperty(prop)){ // return true if the prop string is on the jon object itself.
//        console.log(prop + ' : ' + jon[prop]);
//    }
//}
//
//// the concept of reflection lets us implement the idea of extend - a complement of prototypal inheritance.
//// It's not built in to Javascript, so many frameworks and libraries build it themselves, because it is apparently useful.
//
//var jane = {
//    address : '111 Main street',
//    getFormalFullName : function() {
//        return this.lastname + ', ' + this.firstname;
//    }
//}
//
//var jim = {
//    getFirstName : function() {
//        return this.firstname;
//    }
//}
//
//// note that both the objects are not put in the prototype chain.
//
//_.extend(jon, jane, jim);  // composes / combines all objects (2nd param and beyond) and adds them directly to jon object.
//
//console.log(jon);   
//// resulting object has all properties and methods on the jane and jim object added to it. And jon still has his prototype.




///* Functional Programming languages - languages that have first class functions - functions that behave as objects, can pass them as parameters, can return them from functions. Thus can implement Functional Programming - where we think and code in terms of functions. A different way of programming approach. */
//
//// An example - 
//var arr1 = [1,2,3];
//console.log(arr1);
//
//var arr2 = [];
//for(var i = 0; i < arr1.length; i++){
//    //arr2[i] = arr1[i] * 2;    // this works too.
//    arr2.push(arr1[i] * 2);
//}
//console.log(arr2);
//
//// the above code can be segmented into a function, and the work to be done can be passed to it, for eg - 
//function mapForEach(arr, fn) {
//    var newArr = [];
//    
//    for(var i = 0; i < arr.length; i++){
//        
//        newArr.push(fn(arr[i]));
//    }
//    
//    return newArr;
//}
//
//// Thanks to Functional programming, we are able to pass the work that needs to be done, and make the mapForEach generic.
//var arr3 = mapForEach(arr1, function(item) {
//    return item * 2;
//})
//console.log(arr3);
//
//var arr3 = mapForEach(arr1, function(item) {
//    return item > 2;
//})
//console.log(arr3);  // prints an array of booleans.
//
//// Can make the above limiter example more generic, by passing in the limiter.
//var checkLimitForLimiter = function(limiter, item) {
//    return item > limiter;
//}
////var checkLimitOf1 = checkLimitForLimiter.bind(this, 1); // return a function with limiter preset to 1, and other parameter to be passed.
////var arr4 = mapForEach(arr1, checkLimitOf1); // Works. remember a function is to passed as second param, and checkLimitOf1 is a function.
//var arr4 = mapForEach(arr1, checkLimitForLimiter.bind(this, 1));
//console.log(arr4);
//
//// Works, but this.checkLimitForLimiter - is untidy. better to rewrite function
//var checkLimit = function(limiter) {
//    return this.checkLimitForLimiter.bind(this, limiter);   
//}
//
//var arr5 = mapForEach(arr1, checkLimit(4));
//console.log(arr5);
//
//var checkLimitTidy = function(limiter){
//    return function(limiter, item) {
//        return item > limiter;
//    }.bind(this, limiter);
//}
//
//var arr6 = mapForEach(arr1, checkLimitTidy(0));
//console.log(arr6);
//
//
///* underscore.js - famous library in js that helps work with arrays and collections and objects. 
//    source code available. lodash - similar and sometimes faster implementation.
//    Good place to learn functional programming in action.
//    the name of the object available in the global object is _ (underscore)
//*/
//var arr = [1,2,3];
//// underscore provides ootb map function we just created below (a better version of it ofcourse)
//var arr7 = _.map(arr, function(item) {
//    return item * 3;
//});
//console.log(arr7);
//
//var arr8 = _.filter([2,3,4,5,6,7,8,9], function(item) { return item % 2 === 0 });
//console.log(arr8);  // returns a filter that matches the predicate



///* call(), apply(), bind() special functions available to javascript function objects */
//var person = {
//    firstname : 'Jon',
//    lastname : 'Snow',
//    getFullName : function() {
//        var fullName = this.firstname + ' ' + this.lastname;
//        return fullName;
//    }
//}
//
//var logName = function(lang1, lang2) {
//    console.log('Logged : ' + this.getFullName());
//    console.log('Arguments: ' + lang1 + ' ' + lang2);
//    console.log('--------------------');
//}
//
////logName();  // logs an error because 'this' points to global execution context and there is no function getFullName defined.
//
////var logName = function() {
////    console.log('Logged : ' + this.getFullName());
////}.bind(person);   Could have also bound the function as it was created.
////logName(); // logs person's fullname.
//
///* The bind() function is available to every function, which creates and returns a new function, which when invoked has it's 'this'
//keyword pointing to the argument passed.*/
//
//var logPersonName = logName.bind(person);
//logPersonName();
//logPersonName('en'); // since logPersonName is a copy of the function, it can take same arguments, the only difference being the 'this' variable  for the function being different than the original function.
//
///* The call() function actually invokes the function, with the exception that it let's me decide what the this variable would be.
//It doesn't create a copy function like the bind(). 
//*/
//logName.call(person, 'en', 'es');   // the first argument is the 'this' variable and the rest same as the function.
///* The apply() fn is exactly the same as call() fn, with the difference that it takes the fn's parameters as arrays. */
//logName.apply(person, ['en', 'es']);
//
//
//// Can also Immediately Invoke a function expression using call and apply. For example - 
//(function(lang1, lang2) {
//    console.log('Logged : ' + this.getFullName());
//    console.log('Arguments: ' + lang1 + ' ' + lang2);
//    console.log('--------------------');
//}).apply(person, ['es', 'in']);
//
//var person2 = {
//    firstname : 'Arya',
//    lastname : 'Stark'
//};
//
//// Application of above - function borrowing
//console.log(person.getFullName.apply(person2)); // got function from person and made it run with 'this' pointing to person2.
//
//// 2. Function currying : Creating a copy of a fn but with some preset parameters.
//function multiply(a, b) {
//    return a*b;
//}
//
//var multiplyByTwo = multiply.bind(this, 2); // the resultant function has it's 'a' parameter always set to 2. We don't care about the this variable here because this is never used inside the multiply function.
//
//var multiplyByThree = multiply.bind(this, 3); // a is set to 3 
//
//console.log(multiplyByTwo(3));   // 3 parameter here is the 'b' param. outputs 6
//console.log(multiplyByThree(3));    // outputs 9


///* Closures and Callbacks */
//function sayHiLater() {
//    
//    var greeting = 'Hi!';
//    
//    setTimeout(function() {     // A callback function.
//        console.log(greeting);
//    }, 3000);
//    /* setTimeout is a built-in Javascript function, that takes in a function to be invoked after the time given in milleseconds.
//        setTimeout goes off in the Browser, counts and waits, and then drops an event, and JS engine looks out for any function listening to the event.
//        So setTimeout works asynchronously with the help of the browser. But do note that Javascript is still synchronous and invokes the listener function, once the execution stack is empty. When this listener function is invoked, it's execution contxt is created on the stack and it is able to find the greeting variable in it's closure of it's outer environment. 
//    */
//}
//
//sayHiLater(); // sayHiLater is finished running, and gets popped off the stack, but the listener function is yet to be invoked once 3000 ms have passed.
//
//// jQuery uses function expressions and first-class functions!
////$("button").click(function(){   // A callback function.
////    
////});
//
///* Callback function : A function passed to another function, to be run when the first function is finished. */
//
//function tellMeWhenDone(callback) {
//    var a = 100;
//    var b = 200;
//    callback();
//}
//
//tellMeWhenDone(function() {
//    console.log('I am done');
//});
//tellMeWhenDone(function() {
//    console.log('Done here too..');
//});
////tellMeWhenDone(function() {
////    console.log(a); // gives error. a is not defined in memory. Probable because the function is not sitting lexically inside
////  tellmewhendone method?
////});

///* Function Factories : Another example of Closures in practice */
//function makeGreeting(language){
//    
//    return function(firstname, lastname) {
//        if(language === 'en'){
//            console.log('Hello ' + firstname + ' ' + lastname);
//        }
//        if(language === 'es'){
//            console.log('Hola ' + firstname + ' ' + lastname);
//        }
//    };
//}
//
//var greetEnglish = makeGreeting('en');  // holds fn returned having language set as 'en' from the makeGreeting execution context first invocation.
//var greetSpanish = makeGreeting('es');  // holds fn returned having language set as 'es' from the makeGreeting execution context second invocation.
//
//// possible because of closures.
//greetEnglish('Jon', 'Snow');
//greetSpanish('Jon', 'Snow');
//
////Hence, makeGreeting function has acted here as a factory function.


///* What if in the example below we wanted to log 1, 2, 3 ?
//    There are couple of ways of doing it - 
//    1. ES6 newer version of Javascript provides let keyword - which is scoped to the block - which means every iteration of the 
//    for loop has a new memory spot for the variable j, thus essentially creating 3 variables holding different values.
//*/
//
//function buildFunctions2(){
//    
//    var arr = [];
//    
//    for(var i = 0; i < 3; i++){
//        let j = i;     // j is different in memory space for every iteration as it is block-scoped.
//        arr.push(function() {
//            console.log(j);
//        });
//    }
//    
//    return arr;
//}
//
//var fs2 = buildFunctions2(); // fs holds the array returned. The for loop has run and ended with i=3.
//
//fs2[0]();   // the first function call gets the j let variable from it's outer reference environment - which happens to be different for the first block. Prints 0.
//fs2[1]();   // prints 1
//fs2[2]();   // 2.
//
///* 2. Using the older ES5 only - We need to preserve the 3 values of each iteration in a different execution context.
//We can do that by creating an IIFE. */
//
//function buildFunctions3(){
//    
//    var arr = [];
//    
//    for(var i = 0; i < 3; i++){
//        arr.push(
//            (function(j){
//                // for every iteration this function is EXECUTED since it's an IIFE and new execution context is created holding j.
//                return function(){  // every execution returns a function to be pushed into the array.
//                    console.log(j);
//                };
//            }(i))
//        );
//    }
//    
//    return arr;
//}
//
//var fs3 = buildFunctions3(); // fs holds the array returned. The for loop has run and ended with i=3.
//
//fs3[0]();   // prints j which this function gets going down the scope chain to get the free variable j=0.
//fs3[1]();   // similarly j=1
//fs3[2]();   // 2
//
//
///*A classic example of closures at work*/
//
//function buildFunctions(){
//    
//    var arr = [];
//    
//    for(var i = 0; i < 3; i++){
//        arr.push(function() {       // pushing function objects (written as function expressions) in array
//            console.log(i);
//        });
//    }
//    
//    return arr;
//}
//
//var fs = buildFunctions(); // fs holds the array returned. The for loop has run and ended with i=3.
//
//fs[0]();    // prints the value of i at this instance of execution which is 3
//fs[1]();    // prints 3
//fs[2]();    // prints 3


///* CLOSURES 
//    The greet function runs and it's execution context is created and run and the whattosay variable is created inside the variable
//    environment of greet's execution stack. Once it gets completed it returns (the function) and the greet execution stack is  
//    popped off the execution stack. The whattosay variable however, still sits in memory somewhere and is not garbage collected.
//    The sayHi function is executed and it gets pushed onto the execution stack, and it still has a reference to the variables and 
//    memory space of it's outer environment. 
//    The JS engine ensures that any function can still go down the scope chain and access the 
//    variables it is supposed to have access to, regardless of when the function is run. 
//    This phenomenon is called Closure.
//*/
//
//function greet(whattosay){
//    
//    return function(name) {
//        console.log(whattosay + ' ' + name);
//    };
//}
//
////greet('Hi')('Tony');
//
//var sayHi = greet('Hi');
//sayHi('Tony'); // works fine. How does the function have the variable whattosay here though? Thanks to Closures.


///*IIFEs gaurantee code safety */
//
//var greeting = 'Hola';
//
//(function(name) {
//    console.log(greeting);  // comes out as undefined, not picked up the greeting defined at the global level. This function is not created in memory of the global execution context
//    var greeting = 'Hello ';    // because this greeting variable sits in the variable environment of this function's execution context.
//    console.log(greeting + name);
//    //console.log(this);  // However, the 'this' keyword still points to global window object! Just as in the case of function statement or expression.
//    //this.greeting = 'Bonjour'; // so global object can be accessed like this, but to avoid confusion pass the global object as a parameter.. Weird!
//    //console.log(greeting); the above code that mutates the global object, does not affect this execution context's variable.
//})('Jon');
//
//console.log(greeting);  // since function did not mutate this variable, it's still Hola.

///*** Immediately Invoked Function Expression (IIFE) 
//    At the end of parsing the function expression, JS creates the function object in memory.
//    Parentheses () invokes it.
//*/
//var greeting = function(name) {
//    console.log('Hello ' + name);
//}();
//console.log(greeting); // greeting now holds what is returned by the function - (undefined in this case), not the function itself
//
//var greeting2 = function(name) {
//    return 'Hello ' + name;
//}('John');
//console.log(greeting2); // Again, greeting holds the value returned by the function
//
//// below line of code is valid Javascript statement. No errors.
//3;
//"I am a string";
//{
//    key : "value"
//};
//// However, below syntax code causes error. JS expects this to be a function statement and it must have a name
////function(name) {
////    return 'Hello ' + name;
////}
//
//// Creating a standalone function expression.
//// Surrounding by parantheses. tells the Syntax Parser that whatever inside it is an expression, in this case - A function
//// expression. 
//(function(name) {
//    return 'Hello ' + name;
//});
//
//var firstname = 'John';
//// A classic example of an IIFE - from a standalone function expression.
//(function(name) {
//    var greeting = 'Hello';
//    console.log(greeting + ' ' + name);
//}(firstname));
//
//// Note : can be invoked outside the parantheses too, like below. Both work. - 
//(function(name) {
//    var greeting = 'Hello';
//    console.log(greeting + ' ' + name);
//})(firstname);

//// There is no function overloading in javascript. 
//
//function greet(
//    // Javascript sets up memory space for these variables during the creation phase of the function's execution context
//    firstname, lastname, language) { 
//    
//    language = language || 'en';
//    
//    if(arguments.length === 0){
//        console.log('Missing Parameters');
//        console.log('-----------');
//        return;
//    }
//        
//    console.log(firstname);
//    console.log(lastname);
//    console.log(language);
//    console.log(arguments); // 'arguments' are array-like special keyword containing a list of values passed as params.
//    console.log('arg 0 : ' + arguments[0]);
//    console.log('-----------');
//    
//}
//
//greet();    // js does not give any error for not passing parameters.
//greet('John');  // JS processes parameters left to right.
//greet('John', 'Snow');
//greet('John', 'Snow', 'es');
//greet('John', 'Snow', 'es', '11 main street'); // no error here too. But better to use 'spread' for additional params (supported in newer versions of javascript)
//
//// Usage of spread - 
//function greet2(firstname, lastname, language, ...other){
//    // other is a spread variable which is an array holding additional parameters passed to greet2.
//}


//var arr = new Array(); // clunky way of creatin an array.

/* JAVASCRIPT ARRAYS */

//var arr = []; // is an array
//
//var arr2 = [1, 2, 3];
//
//console.log(arr2[0]); // get the element at index 0
//
///*Javascript arrays can hold a mix of different types*/
//
//var arr3 = [
//    1, 
//    false,
//    {
//        name: 'Tony',
//        address : '111 Main Street'
//    },
//    function(name) {            // can hold a function as functions are objects
//        console.log("Hello " + name);
//    },
//    "hello"
//];
//
//console.log(arr3[2]);
//console.log(arr3);
//arr3[3](arr3[2].name);

/*---------------------------------------------------------------------------*/


//console.log(this);  // points to global object, Window
//
//function a(){
//    console.log("Inside a");
//    console.log(this);  // also points to global object, Window, even though execution context is different from global
//    this.newvariable = 'hello';
//}
//
//var b = function() {
//    console.log("Inside function expression");
//    console.log(this);  // also points to global object, Window, even though execution context is different from global
//}
//
//a();
//
//console.log(newvariable); // new variable created inside function a attached to the global object
//
//b();
//
///* Hence, when just invoking a function like above this points to global object */
//
///* Invoking a method of an object literal */
//
//var c = {
//    name : 'The c object',
//    log : function() {     // this function would still be called an anonymous function (doesn't have a name).
//        var self = this;    
//        /* To get rid of the inherent bug with the this keyword inside a function inside an object method 
//            like below, this is a common practice/design pattern followed where the this keyword is 
//            referenced from another new variable.
//        */
//        
//        this.name = 'The updated c object'; // hence we can mutate the object from a method of that object
//        
//        console.log(this);  //  'this' points to the object c to which this function is attached to **
//        
//        var setname = function(newname) {
//            //this.name = newname;        /* 'this' here points to the global object!! Called by many as A BUG IN JAVASCRIPT */
//            self.name = newname;    /* self points to the c object, 
//                                    JS engine went down the scope chain (with reference to outer lexical environment) */
//        }
//        setname('Updated again! The c object');
//        //console.log(this);  // hence, this will not show any updates to the c object
//        console.log(self);  // safe to use self everywhere inside instead of this, to avoid confusions
//        // self.name  = '..' would be safe to use self instead of this
//    }
//}
//
//c.log();       // invoking the object 'method'

//function log(a){
//    a();
//}
//
//log(function() {
//    console.log('Hi from function passed as a parameter variable');
//});
//
///*This is a function expression, and returns a value that is stored in the variable. 
//Functions being objects, can be assigned to variables like any object. */
//
//var anonymousGreet = function() {
//    console.log('anonymous Hi');
//}
//
///*This variable stores the function object, i.e. it knows the address in memory for that function object.
//The () tells the js engine to invoke the 'code' of this function object.
//Note: Since, the variable is assigned the function object only at runtime, hence can be invoked only after assignment. 
//*/
//anonymousGreet();
//
///* Hence, can be invoked before the function statement as the function is
//already in memory at the time of execution and invokation. */
//greet();
//
///*FUNCTIONS ARE OBJECTS*/
//
///* This is a function statement. The function object is created in memory during the creation phase 
//of the (global, in this case) execution context. */
//function greet(){
//    console.log('Hi');
//}
//
//greet.language= 'english';
//
//console.log(greet.language);

/*Object Literals*/
//
//var p = {};  // object literal. The same as new Object();
//
//var Tony = { 
//    firstname : 'Tony', 
//    lastname : 'Alicea',
//    address : {
//        street : '11 Main Street',
//        city : 'New York'
//    }
//};
//
//function greet(person){
//    console.log("Hi " + person.firstname);
//}
//greet(Tony);
//greet({
//    firstname : "Maria",
//    lastname : "Sharapova"
//});
//
//Tony.address2 = {
//    street : '333 Street'
//}


// Objects and the Dot operator
//var person = new Object();
//
//person["firstname"]="Tony";
//person["lastname"]="Alicea";
//
//var firstnameProperty = "firstname";
//
//console.log(person);
//console.log(person[firstnameProperty]);
//
//console.log(person.firstname);
//console.log(person.lastname);
//
//person.address = new Object();
//
//person.address.street = "11 Main Street";
//person.address.city = "New York";
//
//console.log(person.address.street);
//console.log(person["address"]["city"]);

//function waitThreeSeconds() {
//    var ms = 3000 + new Date().getTime();
//    while(new Date() < ms){}
//    console.log('finished function');
//}
//
//function clickHandler() {
//    console.log('click event!');
//}
//
//document.addEventListener('click', clickHandler);
//
//waitThreeSeconds();
//console.log('finished execution');


//function greet(name){
//    //**** the || operator returns THE VALUE that can be coerced to true!! (and not just true or false)
//    // Hence, undefined || "Paul" returns "Paul"
//    // 0 || 1 -> 1. 0 || 34 -> 34
//    // "hello" || "Hi" will always return the "hello" because it gets the value that coerces to true everytime;
//    // Hence always use the default value as the second parameter while using || to create a default value
//    name = name || "Default Name";
//    console.log("Hello " + name);
//}
//
//greet();


//var a;
//
//// goes to internet and assigns value to a
//
//if(a){
//    // check for existence. Not undefined, null, "", 0, etc.
//}


//function a() {
//    var myVar = 2;
//    
//    function b() {
//        console.log(myVar); // 2, from the reference to outer (lexical) environment
//    }
//    
//    b();
//}
//
//myVar = 1;
//a();


//function b (){
//    console.log('Called b!');
//}
//
//b();
//
//console.log(a); // already created in memory by the js engine in the creation phase of the execution context, as undefined.
//
//var a = "Hello World!";
//
//console.log(a); // now a value is assigned during the execution of this code.


//function b() {
//    //var myVar;
//    console.log(myVar); // 1, from the reference to outer environment
//}
//
//function a() {
//    var myVar = 2;
//    b();
//}
//
//myVar = 1;
//a();
