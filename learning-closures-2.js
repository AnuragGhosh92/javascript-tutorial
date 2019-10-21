/* Function Factories : Another example of Closures in practice */
function makeGreeting(language){
    
    return function(firstname, lastname) {
        if(language === 'en'){
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        if(language === 'es'){
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    };
}

var greetEnglish = makeGreeting('en');  // holds fn returned having language set as 'en' from the makeGreeting execution context first invocation.
var greetSpanish = makeGreeting('es');  // holds fn returned having language set as 'es' from the makeGreeting execution context second invocation.

// possible because of closures.
greetEnglish('Jon', 'Snow');
greetSpanish('Jon', 'Snow');

//Hence, makeGreeting function has acted here as a factory function.


/* Closures and Callbacks */
function sayHiLater() {
    
    var greeting = 'Hi!';
    
    setTimeout(function() {     // A callback function.
        console.log(greeting);
    }, 3000);
    /* setTimeout is a built-in Javascript function, that takes in a function to be invoked after the time given in milleseconds.
        setTimeout goes off in the Browser, counts and waits, and then drops an event, and JS engine looks out for any function listening to the event.
        So setTimeout works asynchronously with the help of the browser. But do note that Javascript is still synchronous and invokes the listener function, once the execution stack is empty. When this listener function is invoked, it's execution contxt is created on the stack and it is able to find the greeting variable in it's closure of it's outer environment. 
    */
}

sayHiLater(); // sayHiLater is finished running, and gets popped off the stack, but the listener function is yet to be invoked once 3000 ms have passed.

// jQuery uses function expressions and first-class functions!
//$("button").click(function(){   // A callback function.
//    
//});

/* Callback function : A function passed to another function, to be run when the first function is finished. */

function tellMeWhenDone(callback) {
    var a = 100;
    var b = 200;
    callback();
}

tellMeWhenDone(function() {
    console.log('I am done');
});
tellMeWhenDone(function() {
    console.log('Done here too..');
});
//tellMeWhenDone(function() {
//    console.log(a); // gives error. a is not defined in memory. Probable because the function is not sitting lexically inside
//  tellmewhendone method?
//});