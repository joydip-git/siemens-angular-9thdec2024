//delegate boolean CalDel(int x);
type logicFnType = (x: number) => boolean

function filterValues(input: number[], loginFnRef: logicFnType): number[] {
    const output: number[] = []
    for (const element of input) {
        const status = loginFnRef(element)
        if (status)
            output.push(element)
    }
    return output
}

const numbers = [1, 2, 3, 4, 5, 6]

const isEven: logicFnType = function (num: number) {
    return num % 2 === 0 ? true : false
}
const evenNumbers = filterValues(numbers, isEven)
console.log(evenNumbers);

const isOdd: logicFnType = function (a: number) {
    return a % 2 !== 0
}
const oddNumbers = filterValues(numbers, isOdd)
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
    )
const compareNumbers = function (a: number, b: number) {
    return a - b
}
numbers
    .sort(compareNumbers)
numbers
    .forEach(
        function (a: number) {
            console.log(a)
        }
    )
//numbers.findIndex()
//numbers.find()
//numbers.map()
//numbers.reduce()
