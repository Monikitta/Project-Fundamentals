function sumDigits(num) {
    let numAsString = String(num);
    let sum = 0;

    for(let i=0; i<numAsString.length; i++) {

        let eachDigit = Number(numAsString[i]);
        sum += eachDigit;

    }

    console.log(sum);
}

sumDigits(543);