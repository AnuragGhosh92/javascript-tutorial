/* call(), apply(), bind() special functions available to javascript function objects */
var person = {
    firstname : 'Jon',
    lastname : 'Snow',
    getFullName : function() {
        var fullName = this.firstname + ' ' + this.lastname;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged : ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('--------------------');
}

//logName();  // logs an error because 'this' points to global execution context and there is no function getFullName defined.

//var logName = function() {
//    console.log('Logged : ' + this.getFullName());
//}.bind(person);   Could have also bound the function as it was created.
//logName(); // logs person's fullname.

/* 
bind() function
    The bind() function is available to every function, which creates and returns a new function, which when invoked has it's 'this'
    keyword pointing to the argument passed.
*/

var logPersonName = logName.bind(person);
logPersonName();
logPersonName('en'); // since logPersonName is a copy of the function, it can take same arguments, the only difference being the 'this' variable  for the function being different than the original function.

/* call() function

The call() function actually invokes the function, with the exception that it let's me decide what the this variable would be.
It doesn't create a copy function like the bind(). 
*/
logName.call(person, 'en', 'es');   // the first argument is the 'this' variable and the rest same as the function.

/* apply() function

The apply() fn is exactly the same as call() fn, with the difference that it takes the fn's parameters as arrays. 
*/
logName.apply(person, ['en', 'es']);


// Can also Immediately Invoke a function expression using call and apply. For example - 
(function(lang1, lang2) {
    console.log('Logged : ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('--------------------');
}).apply(person, ['es', 'in']);

var person2 = {
    firstname : 'Arya',
    lastname : 'Stark'
};

/* 1. Function Borrowing - an application of above concept */
console.log(person.getFullName.apply(person2)); // got function from person and made it run with 'this' pointing to person2.

/* 2. Function currying : Creating a copy of a fn but with some preset parameters.*/
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); // the resultant function has it's 'a' parameter always set to 2. We don't care about the 'this' variable here because this is never used inside the multiply function.

var multiplyByThree = multiply.bind(this, 3); // a is set to 3 

console.log(multiplyByTwo(3));   // 3 parameter here is the 'b' param. outputs 6
console.log(multiplyByThree(3));    // outputs 9