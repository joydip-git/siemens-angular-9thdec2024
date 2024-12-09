var x = 10
console.log(x, typeof x)

x = 'joydip'
console.log(x, typeof x)

var isManager = true
console.log(isManager, typeof isManager)

function add(a, b) {
    return a + b
}

const addRes = add(12, 23)
console.log(addRes);

const anilObj = {
    //value properties
    id: 1,
    name: 'anil',
    salary: 1000,
    //functional property
    show: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

//dot operator (.)
console.log(anilObj.name)
//indexer ([])
console.log(anilObj['salary']);

console.log(anilObj.show());
console.log(anilObj['show']());

var val
var y = 12

//undefined
console.log(val);

//NaN
console.log(val + y, typeof (val + y));

//Infinity
console.log(y / 0);

//var numbers = new Array(11, 22, 33, 44)
var numbers = [11, 22, 33, 44]
numbers.push(50, 60, 70)
console.log(numbers);
numbers.splice(1, 2)
//delete numbers[0]
const choice = Number(window.prompt('enter choice: ', 0))

