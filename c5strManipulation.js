function stringManipulation(word) {
    var vocal = 'aiueo';
    var isVocal = false;

    for (let i = 0; i < vocal.length; i++) {
        if (word[0] === vocal[i]) {
            isVocal = true;
        }
    }

    let hasil = '';

    if (isVocal) { // jika isVocal true
        hasil = word;
    } else {
        for (let i = 1; i < word.length; i++) {
            hasil += word[i];
          
        }

        // hasil += `${word[0]}nyo`;
        hasil = hasil + word[0].concat('nyo');
    }

    console.log(hasil);
}

stringManipulation('ayam');
stringManipulation('bebek');