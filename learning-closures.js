/* CLOSURES */

function greet(whattosay){
    
    return function(name) {
        console.log(whattosay + ' ' + name);
    };
}

//greet('Hi')('Tony');

var sayHi = greet('Hi');
sayHi('Tony'); // works fine. How does the function have the variable whattosay here though? Thanks to Closures.

/*
    The greet function runs and it's execution context is created and run and the whattosay variable is created inside the variable
    environment of greet's execution stack. Once it gets completed it returns (the function) and the greet execution stack is  
    popped off the execution stack. The whattosay variable however, still sits in memory somewhere and is not garbage collected.
    The sayHi function is executed and it gets pushed onto the execution stack, and it still has a reference to the variables and 
    memory space of it's outer environment. 
    The JS engine ensures that any function can still go down the scope chain and access the 
    variables it is supposed to have access to, regardless of when the function is run. 
    This phenomenon is called Closure.
*/

/*A classic example of closures at work*/

function buildFunctions(){
    
    var arr = [];
    
    for(var i = 0; i < 3; i++){
        arr.push(function() {       // pushing function objects (written as function expressions) in array
            console.log(i);
        });
    }
    
    return arr;
}

var fs = buildFunctions(); // fs holds the array returned. The for loop has run and ended with i=3.

fs[0]();    // prints the value of i at this instance of execution which is 3
fs[1]();    // prints 3
fs[2]();    // prints 3

/* What if in the example below we wanted to log 1, 2, 3 ?
    There are couple of ways of doing it - 
    1. ES6 newer version of Javascript provides let keyword - which is scoped to the block - which means every iteration of the 
    for loop has a new memory spot for the variable j, thus essentially creating 3 variables holding different values.
*/

function buildFunctions2(){
    
    var arr = [];
    
    for(var i = 0; i < 3; i++){
        let j = i;     // j is different in memory space for every iteration as it is block-scoped.
        arr.push(function() {
            console.log(j);
        });
    }
    
    return arr;
}

var fs2 = buildFunctions2(); // fs holds the array returned. The for loop has run and ended with i=3.

fs2[0]();   // the first function call gets the j let variable from it's outer reference environment - which happens to be different for the first block. Prints 0.
fs2[1]();   // prints 1
fs2[2]();   // 2.

/* 2. Using the older ES5 only - We need to preserve the 3 values of each iteration in a different execution context.
We can do that by creating an IIFE. */

function buildFunctions3(){
    
    var arr = [];
    
    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                // for every iteration this function is EXECUTED since it's an IIFE and new execution context is created holding j.
                return function(){  // every execution returns a function to be pushed into the array.
                    console.log(j);
                };
            }(i))
        );
    }
    
    return arr;
}

var fs3 = buildFunctions3(); // fs holds the array returned. The for loop has run and ended with i=3.

fs3[0]();   // prints j which this function gets going down the scope chain to get the free variable j=0.
fs3[1]();   // similarly j=1
fs3[2]();   // 2