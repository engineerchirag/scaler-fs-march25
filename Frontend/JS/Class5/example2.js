class Reactangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }

    getPerimeter(){
        return 2 * (this.width + this.height);
    }
}

// Implement these methods
// 1. constructor
// 2. getArea
// 3. getPerimeter

const rectangle1 = new Reactangle(5, 10);

rectangle1.getArea(); // 50
rectangle1.getPerimeter(); // 30