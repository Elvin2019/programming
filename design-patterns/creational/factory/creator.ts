interface Product {
    doStuff(): void;
}

class ConcreteProductA implements Product {
    doStuff(): void {
        console.log('ConcreteProduct1');
    }
}

class ConcreteProductB implements Product {
    doStuff(): void {
        console.log('ConcreteProduct2');
    }
}

abstract class Creator {
    abstract createProduct(): Product;
    someOperation(): void {
        const product = this.createProduct();
        product.doStuff();
    }
}

class ConcreteCreatorA extends Creator {
    createProduct(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator {
    createProduct(): Product {
        return new ConcreteProductB();
    }
}

function clientCode(creator: Creator) {
    creator.someOperation();
}

const creatorA = new ConcreteCreatorA();
clientCode(creatorA);

const creatorB = new ConcreteCreatorB();
clientCode(creatorB);       

export {};