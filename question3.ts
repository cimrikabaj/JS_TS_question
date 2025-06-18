// 3. Create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Implement these methods in subclasses Rectangle and Circle. Instantiate these subclasses and display the area and perimeter of a rectangle and a circle.

abstract class Shape{
    abstract calculateArea():number;
    abstract calculatePerimeter():number;
}

class Rectangle extends Shape{
    length: number;
    breadth: number;

    constructor(length: number, breadth: number){
        super();
        this.length = length;
        this.breadth = breadth;
    }

    public calculateArea(): number {
        return this.length * this.breadth;
    }

    public calculatePerimeter(): number {
        return 2*(this.length+ this.breadth);
    }
}

class Circle extends Shape{
    radius: number;

    constructor(radius: number){
        super();
        this.radius =radius;
    }

    public calculateArea(): number {
        return Math.PI*this.radius**2;
    }

    public calculatePerimeter(): number {
        return 2* Math.PI * this.radius;
    }
}

const rectangle1 = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle1.calculateArea()); 
console.log("Rectangle Perimeter:", rectangle1.calculatePerimeter()); 

const circle1 = new Circle(7);
console.log("Circle Area:", circle1.calculateArea().toFixed(2)); 
console.log("Circle Perimeter:", circle1.calculatePerimeter().toFixed(2)); 