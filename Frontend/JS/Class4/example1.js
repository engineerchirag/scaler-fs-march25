const obj1 = {
    name: "Arunava",
    address: {
        city: "Kolkata",
        state: "West Bengal",
        country: "India"
    }
}

const obj2 = {...obj1};

obj2.name = "Nithish";
console.log(obj1.name); // Arunava

obj2.address.city = "Delhi";
console.log(obj1.address.city); // Delhi

const obj3 = Object.assign({}, obj1);

obj3.name = "Pulkit";
console.log(obj1.name);
obj3.address.city = "Mumbai";
console.log(obj1.address.city); // Mumbai

// Deep Copy

const obj4 = JSON.parse(JSON.stringify(obj1));
obj4.address.city = "Chennai";
console.log(obj1.address.city); // Mumbai