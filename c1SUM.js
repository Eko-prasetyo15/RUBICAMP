function sum() {
    var x = 0;
    for (let y = 0; y < arguments.length; y++) {
        x = x + arguments[y];
    }
    console.log(x);
}
sum(1, 2, 7)
sum(1, 4)
sum(11)
sum(10, 3, 6, 7, 9)
