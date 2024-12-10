//delegate boolean CalDel(int x);

import { logicFnType } from "./types"
import { filterValues } from "./utility"

const people = ['anil', 'sunil', 'joydip']
const nameContainsN: logicFnType<string> = (name: string) => {
    return name.includes('n')
}

const namesWithN = filterValues<string>(people, nameContainsN)
// const namesWithN = people.filter(nameContainsN)
namesWithN.forEach(
    (name) => console.log(name)
)

const numbers = [1, 2, 3, 4, 5, 6]

// const isEven: logicFnType = function (num: number) {
//     return num % 2 === 0 ? true : false
// }
// const evenNumbers = filterValues(numbers, isEven)
// console.log(evenNumbers);
const isEven: logicFnType<number> = function (num: number) {
    return num % 2 === 0 ? true : false
}
const evenNumbers = filterValues<number>(numbers, isEven)
console.log(evenNumbers);

// const isOdd: logicFnType = function (a: number) {
//     return a % 2 !== 0
// }
//const oddNumbers = filterValues(numbers, isOdd)
const isOdd: logicFnType<number> = function (a: number) {
    return a % 2 !== 0
}
const oddNumbers = filterValues<number>(numbers, isOdd)
/*
function call(fnRef: any, a: number, b: number) {
    console.log(fnRef(a, b))
}
function add(a: number, b: number): number {
    return a + b
}
call(add, 12, 13)
*/

numbers
    .filter(
        function (a: number) {
            return a % 2 === 0
        }
    ).forEach(
        (a: number) => console.log(a)
    )
const compareNumbers = function (a: number, b: number) {
    return a - b
}
numbers
    .sort(compareNumbers)
    .forEach(
        function (a: number) {
            console.log(a)
        }
    )

//numbers.findIndex()
//numbers.find()
//numbers.map()
//numbers.reduce()
