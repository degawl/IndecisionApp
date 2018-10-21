const add = function (a, b) {
    return a + b;
};
console.log(add(55, 1, 5001));

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'Tallinn', 'Paris'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return city;
        });
        return cityMessages;
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    args: [2, 4, 6],
    multiplyBy: 3,
    multiply() {
        return this.args.map((arg) =>  arg * this.multiplyBy );
    }
}
console.log(multiplier.multiply());