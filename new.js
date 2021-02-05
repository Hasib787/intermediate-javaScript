class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Masud', 'Hasib', 20000);
const friendlyPerson = new Person('Iftekha', 'Noman', 50000);

console.log(heroPerson);
console.log(friendlyPerson);