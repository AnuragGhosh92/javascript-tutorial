/* Functional Programming languages - languages that have first class functions - functions that behave as objects, can pass them as parameters, can return them from functions. Thus can implement Functional Programming - where we think and code in terms of functions. A different way of programming approach. */

// An example - 
var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for(var i = 0; i < arr1.length; i++){
    //arr2[i] = arr1[i] * 2;    // this works too.
    arr2.push(arr1[i] * 2);
}
console.log(arr2);

// the above code can be segmented into a function, and the work to be done can be passed to it, for eg - 
function mapForEach(arr, fn) {
    var newArr = [];
    
    for(var i = 0; i < arr.length; i++){
        
        newArr.push(fn(arr[i]));
    }
    
    return newArr;
}

// Thanks to Functional programming, we are able to pass the work that needs to be done, and make the mapForEach generic.
var arr3 = mapForEach(arr1, function(item) {
    return item * 2;
})
console.log(arr3);

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
})
console.log(arr3);  // prints an array of booleans.

// Can make the above limiter example more generic, by passing in the limiter.
var checkLimitForLimiter = function(limiter, item) {
    return item > limiter;
}
//var checkLimitOf1 = checkLimitForLimiter.bind(this, 1); // return a function with limiter preset to 1, and other parameter to be passed.
//var arr4 = mapForEach(arr1, checkLimitOf1); // Works. remember a function is to passed as second param, and checkLimitOf1 is a function.
var arr4 = mapForEach(arr1, checkLimitForLimiter.bind(this, 1));
console.log(arr4);

// Works, but this.checkLimitForLimiter - is untidy. better to rewrite function
var checkLimit = function(limiter) {
    return this.checkLimitForLimiter.bind(this, limiter);   
}

var arr5 = mapForEach(arr1, checkLimit(4));
console.log(arr5);

var checkLimitTidy = function(limiter){
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr6 = mapForEach(arr1, checkLimitTidy(0));
console.log(arr6);


/* underscore.js - famous library in js that helps work with arrays and collections and objects. 
    source code available. lodash - similar and sometimes faster implementation.
    Good place to learn functional programming in action.
    the name of the object available in the global object is _ (underscore)
*/
var arr = [1,2,3];
// underscore provides ootb map function we just created above (a better version of it ofcourse)
var arr7 = _.map(arr, function(item) {
    return item * 3;
});
console.log(arr7);

var arr8 = _.filter([2,3,4,5,6,7,8,9], function(item) { return item % 2 === 0 });
console.log(arr8);  // returns a filter that matches the predicate
