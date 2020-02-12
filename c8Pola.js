function pola(str) {
    var a = str.split(' ');
    var save = [];
    batas = (9);
    for (let i = 0; i <= batas; i++) {

        for (let e = 0; e <= batas; e++) {
            if (a[0].replace('#', i) * a[2] == a[4].replace('#', e)) {
                save.push(i, e)
            }

        }

    }

    return save

}


console.log(pola("42#3 * 188 = 80#204")) // output [8, 5]
console.log(pola("8#61 * 895 = 78410#5")) // output [7, 9]