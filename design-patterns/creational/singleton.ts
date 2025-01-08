class Singleton {
    private static instance: Singleton;
  
    private constructor() {}
  
    public static getInstance(): Singleton {
        console.log('getInstance', Singleton.instance)
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();
  console.log(singleton1, singleton2);
  console.log(singleton1 === singleton2); // true
  