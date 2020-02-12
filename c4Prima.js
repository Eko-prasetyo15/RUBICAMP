function indexPrime(param1) {
    var hasil = [];
    var prima = 2;

    while (hasil.length < param1) {
        var isPrime = true;

        for (let i = 2; i <= Math.sqrt(prima); i++) {
            if (prima % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) // = jika isPrime true
         {
            hasil.push(prima);
        }

        prima++; // prima bertambah 1
    }
    
    return hasil[hasil.length - 1];
}

console.log(indexPrime(4))  //result => 7
console.log(indexPrime(500))  //result => 3571
console.log(indexPrime(37786))  //result => 450881