const obj1 = {};

// obj1.name = "John";

Object.defineProperty(obj1, 'name', {
    value: "Saptarshi"
});

Object.defineProperty(obj1, 'age', {
    value: 21
});

Object.defineProperty(obj1, 'city', {
    value: 'CA',
    enumerable: true
});

Object.defineProperty(obj1, 'salary', {
    value: 10000000,
    enumerable: true,
    configurable: true
});


console.log(Object.getOwnPropertyDescriptor(obj1, 'city'));

{
    value: any,            // the property's value
    writable: true/false,  // can the value be changed?
    enumerable: true/false,// will it show up in loops?
    configurable: true/false // can it be deleted or changed?
}
