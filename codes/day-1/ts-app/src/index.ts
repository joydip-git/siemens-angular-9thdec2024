//"use strict"
var x = 10
//x = 'joydip'
function add(a: number, b: number): number {
    return a + b
}
const addRes = add(12, 3)
console.log(addRes);

let obj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    show: function (): string {
        //templated string
        return `${this.name}, ${this.id}, ${this.salary}`
    }
}

//same as JS
class Person {
    //not in JS
    // id: number;
    // name: string;
    // salary: number;

    // //same as JS
    // constructor(id: number, name: string, salary: number) {
    //     this.id = id
    //     this.name = name
    //     this.salary = salary
    // }
    constructor(public id: number, public name: string, public salary: number) {

    }
    //same as JS
    show(): string {
        return `${this.name}, ${this.id}, ${this.salary}`
    }
}

class Trainer extends Person {
    subject: string;
    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary)
        this.subject = subject
    }
    show(): string {
        return `${super.show()} ${this.subject}`
    }
}

const joyTrainer = new Trainer(1, 'joydip', 1000, 'JS')
console.log(joyTrainer.show());

