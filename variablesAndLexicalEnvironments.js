/* Variables and Lexical environments */

function b() {
    //var myVar;
    console.log(myVar); // 1, from the reference to outer environment
}

function a() {
    var myVar = 2;
    b();
}

myVar = 1;
a();