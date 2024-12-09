import { employees } from "./data/employees"
import { Developer } from "./models/developer"
import { Hr } from "./models/hr"

//sample objects
const anilDeveloper = new Developer(1, 'anil', 1000, 2000, 3000, 4000)
const sunilHr = new Hr(2, 'sunil', 1500, 2500, 3500, 4500)

//adding into the storage
employees.push(anilDeveloper)
employees.push(sunilHr)

//printing salary
for (const employee of employees) {
    const salary = employee.calculateSalary()
    console.log(`salary of ${employee.name} is ${salary}`);
}