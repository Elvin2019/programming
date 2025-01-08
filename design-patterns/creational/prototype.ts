/**
 * Creates new objects by copying an existing object.

Example: Cloning objects in memory for performance.
 */

interface Prototype {
    clone(): this;
  }
  
  class Person implements Prototype {
    constructor(public name: string, public age: number) {}
  
    clone(): this {
      return Object.assign(Object.create(this), this);
    }
  }
  
  const original = new Person("John", 25);
  const copy = original.clone();
  console.log(copy); // Person { name: "John", age: 25 }
  