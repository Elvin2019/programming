class Store {
    public values: number[] = [];
    public map = new Map();

     constructor() {
    }


    // //not permit duplicates
    // insert(value: number){
    //     if(this.map.has(value)) return;

    //     this.values.push(value);
    //     this.map.set(value, this.values.length-1);
    //     console.log(this.values, this.map);
    // }

    //let you insert duplicates
    insert (value: number){
        this.values.push(value);
        if(this.map.has(value)) {
            let indexes = this.map.get(value);
            this.map.set(value, [...indexes, this.values.length-1]);
            console.log(this.values, this.map);
            return
        }
        this.map.set(value, [this.values.length-1]);
        console.log(this.values, this.map);
    }


    //not permit duplicates
    // remove(value: number){
    //     const index = this.map.get(value);
    //     const lastIndex = this.values.length-1;

    //     let lastValue = this.values[lastIndex];
    //     this.values[lastIndex] = value;
    //     this.values[index] = lastValue;

    //     this.map.set(lastValue, index);
    //     this.values.pop();
    //     this.map.delete(value);
    //     console.log(this.values, this.map);

    // }

    //let you insert duplicates
    remove(value: number){
        const indexes = this.map.get(value);
        const lastIndex = this.values.length-1;
        const index = indexes[indexes.length-1];

        let lastValue = this.values[lastIndex];
        this.values[lastIndex] = value;
        this.values[index] = lastValue;
        
        
        this.map.set(lastValue, indexes.pop());
        this.values.pop();
        console.log(this.values, this.map);
        // this.map.delete(value);

    }

    getRandom(){
        const index = Math.floor(Math.random() * this.values.length);
        return this.values[index];
    }


}

const store = new Store();
store.insert(1);
store.insert(2);
store.insert(3);

store.insert(3);
store.insert(3);
store.insert(2);
store.insert(1);
store.insert(4)
store.remove(3);
store.remove(3);


// const random = store.getRandom();
// console.log(random);


// store.remove(3);
