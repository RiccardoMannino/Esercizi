class Square {
  constructor(side) {
    this.side = side;
    }
  }

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(values) {
    if(values === rectangle){ 
    return values.width * values.height ;
  }else if(values === circle){
    return (Math.pow(values.radius,2) / Math.PI).toFixed(2) ; 
  }else{
    return values.side * 4 ;
  }
  
 }
} 


const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));