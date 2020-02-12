function weirdMultiply(sentence) {
    var ubah = sentence.toString()
    if (ubah.length > 1) {
        let hasil = 1
        for (let i = 0; i < ubah.length; i++) {
            hasil = hasil * ubah[i] // hasil *= ubah
        }
        return weirdMultiply(hasil)
    } else {
        return sentence
    }

}

console.log(weirdMultiply(39))   // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999))  // -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3))    // -> 3 karena telah satu digit