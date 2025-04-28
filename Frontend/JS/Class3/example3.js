const arr1 = [1,2,3,4,5];
arr1.mySum();

const arr2 = [10,20,30];
arr2.mySum();

Array.prototype.mySum = function() {
    // Get the array
    const arr = this;

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Create polyfill for call

Function.prototype.myCall = function(context, ...args) {
    console.log(context, args); // 

    const requiredFn = this;

    const mySymbol = Symbol();

    // ironMan.petersTeam(...args);

    const result = context[mySymbol] = requiredFn;
    context[mySymbol](...args);
    delete context[mySymbol];
    return result;
}


Function.prototype.myApply = function(context, args) {
    console.log(context, args); // 

    const requiredFn = this;

    context.requiredFn = requiredFn;
    context.requiredFn(...args);
    delete context.requiredFn;
}

Function.prototype.myBind = function(context) {
    const requiredFn = this;
    return function(...args) {
        requiredFn.call(context, ...args);
    }
}

let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function(mem1, mem2){
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team with members ${mem1} and ${mem2}`);
    }
}
let ironMan = {
    name: "Tony", 
    team: "iron man"
}

// Hey Tony .... iron man ... loki & thor
cap.petersTeam.myCall(ironMan, 'loki', 'thor');
cap.petersTeam.myApply(ironMan, ['loki', 'thor']);

const bindedPetersTeam = cap.petersTeam.myBind(ironMan);
bindedPetersTeam('loki', 'thor');

