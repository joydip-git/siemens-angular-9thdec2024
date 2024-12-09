export class Employee {
    constructor(public id: number, public name: string, public basicPayment: number, public daPayment: number, public hraPayment: number) {
    }
    calculateSalary() {
        return this.basicPayment + this.daPayment + this.hraPayment
    }
}
