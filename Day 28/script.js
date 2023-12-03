//JavaScript Program to Create a proxy object that intercepts and logs all property access.

//The original object
const obj = {
  name: "Bob",
  age: 23,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

//handler object with trap

const handler = {
  get(target, property, receiver) {
    console.log(`Accessing property ${property}`);
    return Reflect.get(...arguments);
  },
};

//Proxy Object

const proxy = new Proxy(obj, handler);

console.log(proxy.name);
console.log(proxy.age);
proxy.greet();
