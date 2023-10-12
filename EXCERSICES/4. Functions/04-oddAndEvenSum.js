function oddAndEvenSum(num) {
    let resultOdd = calcOddSum(num);
    let resultEven = calcEvenSum(num);

    console.log(`Odd sum = ${resultOdd}, Even sum = ${resultEven} `); 

    function calcOddSum(num) {
        let numAsString = String(num);
        let oddSum = 0;

        for( let i = 0; i < numAsString.length; i++) {
            let curNum = numAsString[i];

            if(curNum % 2 !== 0) {
                oddSum += Number(curNum);
            }
        }

        return oddSum;
    }

    function calcEvenSum(num) {
        let numAsString = String(num);
        let evenSum = 0;

        for( let i = 0; i < numAsString.length; i++) {
            let curNum = numAsString[i];
        
            if(curNum % 2 == 0) {
                evenSum += Number(curNum);
            }
        }

        return evenSum;
    }
}

oddAndEvenSum(1000435)