//function declaration
function add(a, b) {
    return a + b
}
//function expression
var subtract = function (a, b) {
    return a - b
}
//function expression with arrow function style
var multiply = (a, b) => a * b

const divide = function (a, b) {
    const res = a / b
    if (res === Infinity)
        throw new Error('divisor is zero')
    else
        return res
}

const printChoice = () => {
    window.alert("1. add 2. subtract 3. multiply 4. divide")
}
const getChoice = () => {
    const choice = +prompt("enter choice[1/2/3/4]: ", 0)
    return choice
}
const getValue = () => {
    return Number(prompt("enter value: ", 0))
}

const decide = () => {
    let decision = prompt("continue[y/Y/n/N]: ", 'n')
    return decision.toLocaleLowerCase()
}

let toContinue = 'n'
do {
    printChoice()
    let choice = getChoice()

    const first = getValue()
    const second = getValue()

    switch (choice) {
        case 1:
            let addRes = add(first, second)
            window.alert(addRes)
            break;

        case 2:
            let subRes = subtract(first, second)
            window.alert(subRes)
            break;

        case 3:
            let multiRes = multiply(first, second)
            window.alert(multiRes)
            break;

        case 4:
            let divRes = divide(first, second)
            window.alert(divRes)
            break;

        default:
            break;
    }

    toContinue = decide()

} while (toContinue !== 'n')