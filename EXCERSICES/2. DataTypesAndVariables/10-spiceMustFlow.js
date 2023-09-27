function spiceMustFlow(currentYield) {
    
    let amountOfSpice = 0;
    let daysCount = 0;

    while(currentYield >= 100) {

        amountOfSpice += currentYield - 26;
        currentYield -= 10;
        daysCount++;

        if(amountOfSpice < 26) {
            return;
        }
    }

    if (amountOfSpice >= 26) {
        amountOfSpice -= 26;
    }

    console.log(daysCount);
    console.log(amountOfSpice);
}

spiceMustFlow(450)