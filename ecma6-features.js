/* ECMA6 Features */

/* Classes
    Syntactical sugar over Javascript's prototypal inheritance.
    The Class syntax does not introduce a new object-oriented inheritance model.
*/

// Class declarations.
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

/* Note: Function Declarations are hoisted, whereas Class Declarations are not.*/

var r = new Rectangle();

//var r1 = new Rectangle1();  // throws Uncaught ReferenceError

class Rectangle1{}

var r2 = new Rectangle1();

/* Arrow functions */


const X = function () {
    // "this" here is the caller X
    console.log('inside X function');
    console.log(this);
}

X();

const Y = () => {
    // 'this' here is equal to the 'this found in Y's scope.
    console.log('inside Y function');
    console.log(this);
}

Y();

// in the above case both happen to be the same. i.e. Window