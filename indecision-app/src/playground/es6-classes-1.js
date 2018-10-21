class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super();
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += ` My location is ${ this.homeLocation }.`
        }
        return greeting;
    }
}

const me = new Traveler('Devon', 7, 'Tallinn');
console.log(me.getGreeting());

const other = new Traveler('Jeff', 93);
console.log(other.getGreeting());