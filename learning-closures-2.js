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