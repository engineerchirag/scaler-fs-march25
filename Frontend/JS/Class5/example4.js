// Inheritance in JavaScript


class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting ${this.make} ${this.model}`);
    }

    stop() {
        console.log(`Stopping ${this.make} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
        super(make, model);
        this.batteryCapacity = batteryCapacity;
    }

    charge() {
        console.log(`Charging ${this.make} ${this.model} with ${this.batteryCapacity} kWh battery`);
    }
}

const tesla = new ElectricCar("Tesla", "Model S", 100);
