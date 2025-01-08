/**
 * Defines an interface for creating objects but lets subclasses alter the type of objects that will be created.

Example: Shape factory producing different shapes.
 */

abstract class Shape {
    abstract draw(): void;
  }
  
  class Circle extends Shape {
    draw() {
      console.log("Drawing a Circle");
    }
  }
  
  class Square extends Shape {
    draw() {
      console.log("Drawing a Square");
    }
  }
  
  class ShapeFactory {
    static createShape(type: string): Shape {
      if (type === "circle") return new Circle();
      if (type === "square") return new Square();
      throw new Error("Unknown shape type");
    }
  }
  
  const circle = ShapeFactory.createShape("circle");
  circle.draw(); // Drawing a Circle
  

