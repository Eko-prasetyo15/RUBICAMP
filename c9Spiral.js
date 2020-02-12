function spiral(param1) {
    let array = [];
    let hasil = [];
    let baru = 0;


    for (let i = 0; i < param1; i++) {
        array[i] = [];
        for (let j = 0; j < param1; j++) {
            array[i][j] = baru;
            baru++;
        }
    }
    let barisawal = 0;
    let kolomawal = 0;
    let kolomakhir = param1 - 1;
    let barisakhir = param1 - 1;
    while (barisawal <= barisakhir && kolomawal <= kolomakhir) {
        for (let j = barisawal; j <= kolomakhir; j++) {
            hasil.push(array[barisawal][j])
        }
        barisawal++
        for (let k = barisawal; k <= barisakhir; k++) {
            hasil.push(array[k][kolomakhir]);
        }
        kolomakhir--

        for (let l = kolomakhir; l >= kolomawal; l--) {
            hasil.push(array[barisakhir][l]);
        }
        barisakhir--

        for (let m = barisakhir; m >= barisawal; m--) {
            hasil.push(array[m][kolomawal]);
        }
        kolomawal++
    }

    console.log(hasil);
}

spiral(5);
spiral(6);
spiral(7);