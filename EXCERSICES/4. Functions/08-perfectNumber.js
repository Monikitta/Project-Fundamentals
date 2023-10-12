function perfectNumber(n) {
    
    let sum = 0;

    for ( let digit = 1; digit < n; digit++) {

        if(n % digit == 0 ) {
            sum += digit;
        }
    }

    if ( sum == n) {
        console.log("We have a perfect number!"); 
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(28)