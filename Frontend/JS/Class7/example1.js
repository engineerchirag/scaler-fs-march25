function b(){
    console.log(a);
}

function fn() {
    var a = 1;
    b(); // Line7.
    console.log(a);// Line8.
}

fn();

///////////


function fn() {
    var a = 1;
    function b(){
        console.log(a);
    }
    b(); // 1.
    console.log(a);// 2.
}

fn();

//////////////


function fn() {
    var a = 1;
    function b(){
        var a;
        console.log(a);
    }
    b(); // 1.
    console.log(a);// 2.
}

fn();

////
var varName = 10;
function b() {
    console.log( varName);
}
function fn() {
    var varName = 20;
    b();
    console.log(varName);
}
fn();
