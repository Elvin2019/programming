/**
 * Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

Example: Building a complex document.
 */

class House {
    windows: number = 0;
    doors: number = 0;
    roof: boolean = false;
  }
  
  class HouseBuilder {
    private house: House = new House();
  
    setWindows(count: number): this {
      this.house.windows = count;
      return this;
    }
  
    setDoors(count: number): this {
      this.house.doors = count;
      return this;
    }
  
    setRoof(hasRoof: boolean): this {
      this.house.roof = hasRoof;
      return this;
    }
  
    build(): House {
      return this.house;
    }
  }
  
  const house = new HouseBuilder()
    .setWindows(4)
    .setDoors(2)
    .setRoof(true)
    .build();
  console.log(house); // { windows: 4, doors: 2, roof: true }
  