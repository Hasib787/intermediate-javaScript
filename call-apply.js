const normalPerson ={
    firstName: 'Hasibul',
    lastName: 'Hasan',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary= this.salary - amount;
        return this.salary;
    }
}
// normalPerson.chargeBill(100);
// normalPerson.chargeBill(2000);
// console.log(normalPerson.salary);

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

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(5000);
heroChargeBill(1000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(2000);
friendlyChargeBill(200);
console.log(friendlyPerson.salary);