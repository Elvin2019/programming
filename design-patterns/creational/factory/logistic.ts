// Transport Interface
interface Transport {
    deliver(): void;
  }
  
  // Concrete Product 1: Truck
  class Truck implements Transport {
    deliver(): void {
      console.log("Delivering goods by truck on the road.");
    }
  }
  
  // Concrete Product 2: Ship
  class Ship implements Transport {
    deliver(): void {
      console.log("Delivering goods by ship across the sea.");
    }
  }
  
  // Creator (Abstract Class)
  abstract class Logistics {
    // Factory Method
    abstract createTransport(): Transport;
  
    // Business logic using the Factory Method
    planDelivery(): void {
      const transport = this.createTransport();
      transport.deliver();
    }
  }
  
  // Concrete Creator 1: RoadLogistics
  class RoadLogistics extends Logistics {
    createTransport(): Transport {
      return new Truck(); // Returns a Truck
    }
  }
  
  // Concrete Creator 2: SeaLogistics
  class SeaLogistics extends Logistics {
    createTransport(): Transport {
      return new Ship(); // Returns a Ship
    }
  }
  
  // Client Code
  function clientCode(logistics: Logistics) {
    logistics.planDelivery();
  }
  
  // Example Usage
  console.log("Using Road Logistics:");
  const roadLogistics = new RoadLogistics();
  clientCode(roadLogistics); // Output: Delivering goods by truck on the road.
  
  console.log("\nUsing Sea Logistics:");
  const seaLogistics = new SeaLogistics();
  clientCode(seaLogistics); // Output: Delivering goods by ship across the sea.
  