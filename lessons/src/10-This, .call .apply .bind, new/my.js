const obj = {
    name: 'John',
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};

obj.greet(); // "Hello, John!"
