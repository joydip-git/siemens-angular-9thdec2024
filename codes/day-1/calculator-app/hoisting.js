// (function global() {
function print() {
    //console.log(x);//
    let x
    x = 10
    console.log(x);//10

    for (let i = 0; i < 1; i++) {
        let x
        x = 20
        console.log(x);//20
    }
    console.log(x);//10 or 20
}
print()
// })()