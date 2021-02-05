const normalPerson ={
    firstName: 'Hasibul',
    lastName: 'Hasan',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary= this.salary - amount - tips - tax;
        return this.salary;
    }
}
normalPerson.chargeBill(100);
normalPerson.chargeBill(2000);
console.log(normalPerson.salary);

const heroPerson={
    fullName: 'Hasanuj Zaman',
    phone: 6145478556,
    salary: 20000
}

const friendlyPerson={
    fullName: 'Iftekhar Hossain Noman',
    phone: 1454715645,
    salary: 25000
}

// bind method
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(5000);
// heroChargeBill(1000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(2000);
// friendlyChargeBill(200);
// console.log(friendlyPerson.salary);

//call method 
normalPerson.chargeBill.call(heroPerson, 2000, 200, 20);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
console.log(friendlyPerson.salary);

//apply method
normalPerson.chargeBill.apply(heroPerson, [2000, 200, 20]);
normalPerson.chargeBill.apply(heroPerson, [1000, 500,  100]);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(friendlyPerson, [1000, 600, 70]);
console.log(friendlyPerson.salary);
